import {lai} from "../../Api.js";
import {useState} from "react";

export const CharacterList = ({characterList, characterGet, isCharacterEdit, setIsCharacterEdit}) => {
    const [editValues, setEditValues] = useState(characterList.map(char => ({...char})));

    const characterEditing = (index) => {
        const changeCharacterEdit = [...isCharacterEdit]
        changeCharacterEdit[index] = !changeCharacterEdit[index]
        setIsCharacterEdit(changeCharacterEdit)
        setEditValues(characterList.map(char => ({...char})))
    }

    const characterPut = async (index) => {
        await lai.put("/character", editValues[index])
        characterEditing(index)
        await characterGet()
    }

    const characterDelete = async (id) => {
        await lai.delete("/character", {params: {_id: id}})
        await characterGet()
    }

    return (
        <>
            <div>캐릭터 목록</div>
            {characterList.map((item,index) => {
                return (
                    <div key={index}>
                            <>
                                <div className={"flex"}>
                                    <div className={"border grid grid-cols-3 gap-1"}>

                                        {!isCharacterEdit[index] ?
                                            <>
                                            <p>원정대 :{item.roster}</p><p>캐릭명 :{item.name}</p><p>클래스 :{item.class}</p>
                                    <p>템랩 : {item.level}</p><p>로펙 : {item.lopec}</p><p>즐로아 : {item.zloa}</p>
                                            </>
                                            :
                                            <>
                                    <p>원정대 : <input
                                        className={"border"}
                                        value={editValues[index].roster}
                                        onChange={(e) => {
                                            const newValues = [...editValues];
                                            newValues[index].roster = e.target.value;
                                            setEditValues(newValues);
                                        }}
                                    /></p>
                                    <p>캐릭명 : <input
                                        className={"border"}
                                        value={editValues[index].name}
                                        onChange={(e) => {
                                            const newValues = [...editValues];
                                            newValues[index].name = e.target.value;
                                            setEditValues(newValues);
                                        }}
                                    /></p>
                                    <p>클래스 : <input
                                        className={"border"}
                                        value={editValues[index].class}
                                        onChange={(e) => {
                                            const newValues = [...editValues];
                                            newValues[index].class = e.target.value;
                                            setEditValues(newValues);
                                        }}
                                    /></p>
                                    <p>템랩 : <input
                                        className={"border"}
                                        type="number"
                                        value={editValues[index].level}
                                        onChange={(e) => {
                                            const newValues = [...editValues];
                                            newValues[index].level = parseFloat(e.target.value);
                                            setEditValues(newValues);
                                        }}
                                    /></p>
                                    <p>로펙 : <input
                                        className={"border"}
                                        type="number"
                                        value={editValues[index].lopec}
                                        onChange={(e) => {
                                            const newValues = [...editValues];
                                            newValues[index].lopec = parseInt(e.target.value);
                                            setEditValues(newValues);
                                        }}
                                    /></p>
                                    <p>즐로아 : <input
                                        className={"border"}
                                        type="number"
                                        value={editValues[index].zloa}
                                        onChange={(e) => {
                                            const newValues = [...editValues];
                                            newValues[index].zloa = parseInt(e.target.value);
                                            setEditValues(newValues);
                                        }}
                                    /></p>
                                            </>
                                        }
                                    </div>
                                    <div>
                                        <div>
                                            {!isCharacterEdit[index] ? <button
                                                className={"hover:cursor-pointer border"}
                                                onClick={() => {
                                                    characterEditing(index)
                                                }}
                                            >
                                                수정
                                            </button> :
                                                <button
                                                    className={"hover:cursor-pointer border"}
                                                    onClick={() => characterPut(index)}
                                                >
                                                    적용
                                                </button>
                                            }
                                        </div>
                                        <div>
                                        <button
                                            className={"hover:cursor-pointer border"}
                                            onClick={() => characterDelete(item._id)}
                                        >
                                            삭제
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                    </div>
                )
            })}
        </>
    )
}