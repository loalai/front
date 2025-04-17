import {lai} from "../../Api.js";
import {useState} from "react";

export const RosterName = ({rosterRead,isRosterEdit,rosterEditing,item,index}) => {
    const [rosterNameEdit, setRosterNameEdit] = useState(item.roster);
    const isEditing = isRosterEdit[index]
    const rosterPut = async (item) => {
        await lai.put('/roster',{_id: item._id, roster: rosterNameEdit})
        await rosterRead()
    }

    const rosterDelete = async (id) => {
        console.log(id)
        await lai.delete(`/roster`,{params:{_id:id}})
        await rosterRead()
    }

    return (
        <div key={index} className="flex">
            {!isEditing ? <div className={"flex justify-center items-center"}>{item.roster}</div> :
                <input
                    className={"flex justify-center items-center"}
                    onChange={(e) => setRosterNameEdit(e.target.value)}
                    value={rosterNameEdit}
                ></input>}
            {!isEditing ?
                <button
                    className={"hover:cursor-pointer border p-0.5"}
                    onClick={() => rosterEditing(index)}>
                    수정
                </button>
                :
                <button
                    className={"hover:cursor-pointer border p-0.5"}
                    onClick={() => rosterPut(item)}
                >
                    적용
                </button>
            }
            <button className={"hover:cursor-pointer border p-0.5"} onClick={()=>rosterDelete(item._id)}>삭제</button>
        </div>
    )
}