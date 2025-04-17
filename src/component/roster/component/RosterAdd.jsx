import {lai} from "../../Api.js";
import {useState} from "react";

export const RosterAdd = ({rosterRead}) => {
    const [rosterNameInput, setRosterNameInput] = useState("");
    const rosterCreate = async (rosterName) => {
        await lai.post(`/roster`, {roster: rosterName})
        await rosterRead()
    }
    return (
        <>
            <input
                className={"border"}
                value={rosterNameInput}
                onChange={(e) => setRosterNameInput(e.target.value)}
            />
            <button
                className={"hover:cursor-pointer border p-0.5"}
                onClick={() => (rosterCreate(rosterNameInput))}
            >
                추가
            </button>
        </>
    )
}