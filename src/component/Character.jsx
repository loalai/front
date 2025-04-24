import {useEffect, useState} from "react";
import {lai} from "./Api.js";

export const Character = ({rosterList}) => {
    const [characterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterLevel, setCharacterLevel] = useState(0)
    const [characterLopec, setCharacterLopec] = useState(0)
    const [characterZloa, setCharacterZloa] = useState(0)
    const [rosterSelect, setRosterSelect] = useState("")
    const [selectRoster, setSelectRoster] = useState(0)
    const [isDropdown, setIsDropdown] = useState(false)

    useEffect(() => {
        characterGet()
    },[])

    const dropdownSelect = (roster) => {
        setRosterSelect(roster)
        setIsDropdown(false)
    }

    const characterGet = async () => {
        const res.data = await lai.get("character")

    }

    const characterSearch = async () => {}

    const characterPost = async () =>{
       await lai.post("/character",{})
    }

    const characterPut = async () =>{}

    const characterDelete = async () =>{}


    return (
        <>
            <div>캐릭터 등록</div>
            <div className={"flex gap-1"}>
                원정대 :
                <div>
                    <div
                        className={"border w-[179px] h-[26px]"}
                        onClick={()=> setIsDropdown(!isDropdown)}
                    >{rosterSelect}</div>
                    {isDropdown && (rosterList.length === 0
                        ?
                        <div className={"bg-white"}>등록된 원정대가 없습니다.</div>
                        :
                        rosterList.map((item,index) => {
                            return(
                                <div
                                    key={index}
                                    onClick={() => dropdownSelect(item.roster)}
                                    className={` border cursor-pointer hover:bg-gray-200`}
                                >{item.roster}</div>
                            )
                        }))}
                </div>
            </div>
            <div className={"flex gap-1"}>
                <p>캐릭터명 :</p><input
                className={"border"}
                onChange={(e) => setCharacterName(e.target.value)}
                value={characterName}
            />
            </div>
            <div className={"flex gap-1"}>
                <p>클래스 :</p><input
                className={"border"}
                onChange={(e)=> setCharacterClass(e.target.value)}
                value={characterClass}
            />
            </div>
            <div className={"flex gap-1"}>
                <p>템랩 :</p><input
                className={"border"}
                type={"number"}
                onChange={(e)=> setCharacterLevel(e.target.value)}
                value={characterLevel}
            />
            </div>
            <div className={"flex gap-1"}>
                <p>로펙 :</p><input
                className={"border"}
                type={"number"}
                onChange={(e)=> setCharacterLopec(e.target.value)}
                value={characterLopec}
            />
            </div>
            <div className={"flex gap-1"}>
                <p>즐로아 :</p><input
                className={"border"}
                type={"number"}
                onChange={(e)=> setCharacterZloa(e.target.value)}
                value={characterZloa}
            />
            </div>
            <button className={"hover:cursor-pointer border"}>추가</button>
        </>
    )
}