import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import nodemailer = require ("nodemailer");

@Injectable()
export class RemetenteService {

  @Cron('25 * * * * *')
  async sendMail() {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.email",
      port: 587,
      secure: false, // verdadeiro para 465, falso para outras portas
      auth: {
        user: 'email@example.com',
        pass: 'email12345',
      },
    });

    // Enviar e-mail com objeto de transporte definido
    const info = await transporter.sendMail({
      from: 'foo@example.com', // Endereço do remetente
      to: "cli@example.com, cli1@example.com, cli2@example.com", // Lista de receptores
      subject: "Node test send mail", // Linha de assunto
      text: "Produtos com desconto!", // Corpo de texto simples
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

  }
}