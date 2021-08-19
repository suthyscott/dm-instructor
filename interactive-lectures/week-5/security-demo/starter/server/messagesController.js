const bcrypt = require('bcryptjs')
const chats = []

// chat = {
//     pin: example pin,
//     messages: [message, message]
// }

module.exports = {
    createMessage: (req, res) => {
        // console.log(req.body)
        const {pin, message} = req.body

        for(let i = 0; i < chats.length; i++){
            let existing = bcrypt.compareSync(pin, chats[i].pinHash)
            if(existing){
                chats[i].messages.push(message)
                let messagesToReturn = {...chats[i]}
                delete messagesToReturn.pinHash
                res.status(200).send(messagesToReturn)
                return
            }

        }

        let salt = bcrypt.genSaltSync(5)
        let pinHash = bcrypt.hashSync(pin, salt)
        
        let chatObj = {
            pinHash,
            messages: [message]
        }

        chats.push(chatObj)

        // console.log(chats)
        let messagesToReturn = {...chatObj}
        delete messagesToReturn.pinHash
        res.status(200).send(messagesToReturn)
    }
}