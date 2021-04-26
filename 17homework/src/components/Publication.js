import React from 'react'

function Publication (props) {
    return (
        <div className="Publication">
            <img className="userImg" src={props.userImg} alt="User" />
            <div className="container">
                <h4>{props.name} ✔ {props.nickname} - {props.date}</h4>
                <p>'sndkvjbdjvbsdlvlsdnvlsdnvlsdnlvsjv snvsndlvnsldfnlksnvlksdnvlnsdldvns lnvlxnvklnvnlsnwwvsr kvhkbkb kb kbk b bk bkbjk bk bjkb kjb kj bjk bkjb kjb jb kjb '</p>
                <img className="publicationImg" src={props.publicationImg} alt="" />
                <button>like❤</button>
            </div>
        </div>
    )
}

export default Publication