import {useEffect, useState} from "react";
import {lai} from "../Api.js";
import {RosterName} from "./component/RosterName.jsx";
import {RosterAdd} from "./component/RosterAdd.jsx";



export const Roster = ({rosterList, setRosterList}) => {

    const [isRosterEdit, setIsRosterEdit] = useState([])

    useEffect( () => {
        rosterRead()
    },[])

    const rosterRead = async () => {
        const response = await lai.get("/roster")
        setIsRosterEdit(new Array(response.data.length).fill(false))
        setRosterList(response.data)
    }

    const rosterEditing = (index) => {
        const changeRosterEdit = [...isRosterEdit]
        changeRosterEdit[index] = !changeRosterEdit[index]
        setIsRosterEdit(changeRosterEdit)
    }

    return(
        <div className="Roster">
            <div>원정대</div>
            <div>원정대 등록</div>
            <RosterAdd rosterRead={rosterRead}/>
            <div>원정대 목록</div>
            {rosterList.map((item, index) => {
                return (
                <RosterName key={index} rosterRead={rosterRead} isRosterEdit={isRosterEdit}
                            rosterEditing={rosterEditing} item={item} index={index}/>
                )
            })}
            <div>
            </div>
        </div>
    )
}