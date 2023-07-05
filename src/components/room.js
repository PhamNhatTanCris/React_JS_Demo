import Student from "./strudent";

function Room(props){

    return(
        <>
            <h1>{props.name_room}</h1>
            <h1>{props.created}</h1>

            <Student name="Phạm Nhật Tân" age="31" address="Nam Định"/>
            <br/>
            <Student name="fsdfsdf" age="21" address="Nam Định"/>
            <br/>
            <Student name="Phạm Nhậsdfsdft Tân" age="31" address="Nam Định"/>
        </>
    );
}

export default Room;