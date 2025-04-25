import {useEffect, useState} from "react";
import {lai} from "../Api.js";
import {CharacterList} from "./component/CharacterList.jsx";

export const Character = ({rosterList}) => {
    const [characterList, setCharacterList] = useState([])
    const [rosterSelect, setRosterSelect] = useState("")
    const [characterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterLevel, setCharacterLevel] = useState(0)
    const [characterLopec, setCharacterLopec] = useState(0)
    const [characterZloa, setCharacterZloa] = useState(0)
    const [isDropdown, setIsDropdown] = useState(false)
    const [isCharacterEdit, setIsCharacterEdit] = useState([])

    useEffect(() => {
        characterGet()
    },[])

    const dropdownSelect = (roster) => {
        setRosterSelect(roster)
        setIsDropdown(false)
    }

    const characterGet = async () => {
        const { data } = await lai.get("character")
        setIsCharacterEdit(new Array(data.length).fill(false))
        setCharacterList(data)
    }

    const characterSearch = async (name) => {
        const { data } = await lai.get("character/search",{params:{characterName: name}})
        return data
    }

    const characterPost = async () =>{
        if(rosterSelect === "" || characterName === "" || characterClass === "" || characterLevel === 0 || characterLopec === 0 || characterZloa === 0){
            alert("입력값이 올바르지 않습니다.")
            return
        }

        const search = await characterSearch(characterName)
        if(search.length === 1){alert("이미 등록된 캐릭터 명입니다."); return}

       await lai.post("/character",{
           roster: rosterSelect,
           name: characterName,
           class: characterClass,
           level: characterLevel,
           lopec: characterLopec,
           zloa: characterZloa,
       })
        await characterGet()
        setRosterSelect("")
        setCharacterName("")
        setCharacterClass("")
        setCharacterLevel(0)
        setCharacterLopec(0)
        setCharacterZloa(0)
    }



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
                onChange={(e) => setCharacterLevel(parseFloat(e.target.value))}
                value={characterLevel}
            />
            </div>
            <div className={"flex gap-1"}>
                <p>로펙 :</p><input
                className={"border"}
                type={"number"}
                onChange={(e) => setCharacterLopec(parseInt(e.target.value))}
                value={characterLopec}
            />
            </div>
            <div className={"flex gap-1"}>
                <p>즐로아 :</p><input
                className={"border"}
                type={"number"}
                onChange={(e) => setCharacterZloa(parseInt(e.target.value))}
                value={characterZloa}
            />
            </div>
            <button className={"hover:cursor-pointer border"} onClick={() => characterPost()}>추가</button>
            <CharacterList
                characterList={characterList}
                characterGet={characterGet}
                isCharacterEdit={isCharacterEdit}
                setIsCharacterEdit={setIsCharacterEdit}
            />
        </>
    )
}