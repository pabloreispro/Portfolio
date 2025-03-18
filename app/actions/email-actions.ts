"use client" 

import emailjs from "@emailjs/browser"

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    
    if (!name || !email || !message) {
      return { success: false, message: "Preencha todos os campos." }
    }

    // Enviar e-mail via EmailJS
    const response = await emailjs.send(
      "service_azs75x5",  
      "template_s418zmp", 
      { name, email, message },
      "kTMDBojqk20KIHFad"   
    )

    if (response.status === 200) {
      return { success: true, message: "Mensagem enviada com sucesso! Em breve você será respondido." }
    } else {
      return { success: false, message: "Erro ao enviar mensagem." }
    }
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return { success: false, message: "Erro ao enviar mensagem. Tente novamente." }
  }
}