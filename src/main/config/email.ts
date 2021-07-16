import { EmailOptions } from '@/usecases/send-email/ports'

const attachments = [{
  filename: 'clean-architecture.pdf',
  path: 'https://otaviolemos.github.io/clean-architecture.pdf'
}]

export function getEmailOptions (): EmailOptions {
  const from = 'Otávio Lemos | theWiseDev <otaviolemos@thewisedev.com.br>'
  const to = ''
  const mailOptions: EmailOptions = {
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT),
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    from: from,
    to: to,
    subject: 'Mensagem de teste',
    text: 'Texto da mensagem',
    html: '<b> Texto da mensagem </b>',
    attachments: attachments
  }
  return mailOptions
}
