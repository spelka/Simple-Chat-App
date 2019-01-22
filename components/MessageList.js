import React from 'react'

const DUMMY_DATA = [
    {
        senderId: "John Doe",
        text: "Hi, I'm John"
    },
    {
        senderId: "Jane Doe",
        text: "Hey, I'm Jane :)"
    }
]

class MessageList extends React.Component
{
    render()
    {
        return (
            <div classname="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return(
                        <div key={index} className="message">
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList