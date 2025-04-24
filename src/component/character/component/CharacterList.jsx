export const CharacterList = ({characterList}) => {
    return (
        <>
            <div>캐릭터 목록</div>
            {characterList.map((item,index) => {
                return (
                    <div key={index}>
                        원정대 :{item.roster}
                        캐릭명 :{item.name}
                        클래스 :{item.class}
                        템랩 : {item.level}
                        로펙 : {item.lopec}
                        즐로아 : {item.zloa}
                        <button className={"hover:cursor-pointer border"} onClick={() => characterDelete(item._id)}>수정</button>
                        <button className={"hover:cursor-pointer border"} onClick={() => characterDelete(item._id)}>삭제</button>
                    </div>
                )
            })}
        </>
    )
}