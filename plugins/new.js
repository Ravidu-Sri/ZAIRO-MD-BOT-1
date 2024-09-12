const {cmd, commands} = require('../command')
const pkg = require('@whiskeysockets/baileys')
const {proto, generateWAMessageFromContent, generateWAMessageContent} = pkg
const {sleep} = require('../lib/functions')

// Generate media (image or video)
const generate = async (type, url) => {
    const generated = await generateWAMessageContent({
        [type]: { url }
    }, {
        upload: sock.waUploadToServer
    })
    return generated[`${type}Message`]
}

// Define the command for the interactive message
cmd({
    pattern: "yy",
    desc: "Send interactive menu with buttons",
    category: "general",
    filename: __filename
},
async (conn, mek, m, {from, reply}) => {
    try {
        const msg = await generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: "body text (optional)"
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "footer text (optional)"
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: "some title",
                            hasMediaAttachment: true,
                            imageMessage: await generate("image", "url/path to image") // Replace with the actual image URL
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "button 1",
                                    id: ".menu"
                                })
                            },{
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "subscribe my Youtube!",
                                    url: "https://youtube.com/@fannmods",
                                    merchant_url: "https://youtube.com"
                                })
                            }]
                        })
                    })
                }
            }
        }, {})

        // Relay the message
        await sock.relayMessage(from, msg.message, {
            messageId: msg.key.id
        })

        reply("Menu sent successfully!")
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})