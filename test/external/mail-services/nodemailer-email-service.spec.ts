import { EmailOptions } from '@/usecases/send-email/ports'
import { NodemailerEmailService } from '@/external/mail-services'
import { MailServiceError } from '@/usecases/errors'

const attachmentFilePath = '../resources/text.txt'
const fromName = 'Test'
const fromEmail = 'from_email@mail.com'
const toName = 'any_name'
const toEmail = 'any_email@mail.com'
const subject = 'Test e-mail'
const emailBody = 'Hello world attachment test'
const emailBodyHtml = '<b>Hello world attachment test</b>'
const attachment = [{
  filename: attachmentFilePath,
  contentType: 'text/plain'
}]

const mailOptions: EmailOptions = {
  host: 'test',
  port: 867,
  username: 'test',
  password: 'test',
  from: fromName + ' ' + fromEmail,
  to: toName + '<' + toEmail + '>',
  subject: subject,
  text: emailBody,
  html: emailBodyHtml,
  attachments: attachment
}

jest.mock('nodemailer')
const nodemailer = require('nodemailer')
const sendMailMock = jest.fn().mockReturnValueOnce('ok')
nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock })

describe('Nodemailer mail service adapter', () => {
  beforeEach(() => {
    sendMailMock.mockClear()
    nodemailer.createTransport.mockClear()
  })
  test('should return ok if email is sent', async () => {
    const nodemailer = new NodemailerEmailService()
    const result = await nodemailer.send(mailOptions)
    expect(result.value).toEqual(mailOptions)
  })

  test('should return error if email is not sent', async () => {
    const nodemailer = new NodemailerEmailService()
    sendMailMock.mockImplementationOnce(() => {
      throw new Error()
    })
    const result = await nodemailer.send(mailOptions)
    expect(result.value).toBeInstanceOf(MailServiceError)
  })
})
