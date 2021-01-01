const help = (prefix) => {
	return `> *Sticker Comandos* <
command : *${prefix}sticker* o *${prefix}stiker*
desc : convertir imagen / gif / video adhesivo
usage : imagen de respuesta / gif / video o enviar imagen / gif / video con subtítulo\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : convertir la imagen en una pegatina quitando el fondo
usage : responder imagen o enviar imagen con título\n
command : *${prefix}toimg*
desc : convertir pegatina en imagen
usage : reply sticker\n
command : *${prefix}tsticker* o *${prefix}tstiker*
desc : convertir texto en pegatina
usage : *${prefix}tsticker text in here*\n
> *Meme Comandos* <
command : *${prefix}meme*
desc : imagenes de memes al azar [english]
usage : solo envía el comando\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : solo envía el comando\n
> *Otros Comandos* <
command : *${prefix}gtts*
desc : convertir texto a voz / áudio
usage : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imágenes aleatorias de lolis
usage : solo envía el comando\n
command : *${prefix}nsfwloli*
desc : imágenes aleatorias de +18 lolis [PRIVADO]
usage: basta enviar o comando\n
command : *${prefix}url2img*
desc : tomar capturas de pantalla web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : su mensaje será respondido por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : obtener el texto en la foto
usage : responder imagen o enviar imagen con título\n
command : *${prefix}wait*
desc : buscar anime con imagen [ What Anime Is This/That ]
usage : responder imagen o enviar imagen con leyenda\n
command : *${prefix}setprefix*
desc : reemplazar prefijo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando solo puede ser utilizado por el propietario del bot\n
> *Comandos de Grupo* <
command : *${prefix}linkgroup*
desc : obtener el enlace del grupo
usage : solo envía el comando\
note : solo se puede usar cuando el bot se convierte en administrador, y el que envía el comando es administrador!\n
command : *${prefix}tagall*
desc : marca a todos los miembros del grupo, incluidos los administradores también
usage : solo envía el comando
note : Este comando puede usarse si es un administrador de grupo\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* para activar el modo simi y *${prefix}simih 0* para deshabilitar el modo simi
note : Este comando se puede utilizar si es administrador\n`
}

exports.help = help


