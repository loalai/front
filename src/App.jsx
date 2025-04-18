import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Roster} from "./component/roster/Roster.jsx";

const raidList = [
    "강습 : 멸망의 불꽃, 타르칼",
    "3막: 칠흑, 폭풍의 밤",
    "2막: 부유하는 악몽의 진혼곡",
    "1막: 대지를 부수는 업화의 궤적",
    "폭풍의 지휘관, 베히모스",
    "서막: 붉어진 백야의 나선",
]


const characters = {
    1: {id: 1, roster: "샤프테드", name: "지는쪽은서포터가되는걸로", class: "홀리나이트", level: 1701.6, lopec: 1000, zloa: 1000}
}

const partyList = [
    {
        id: 1,
        raidType: "강습 : 멸망의 불꽃, 타르칼",
        members: [1,1,1,1,1,1,1,1]
    }
]

const rosters = []

function App() {
    const [raidSelect, setRaidSelect] = useState(0)
    const [rosterSelect, setRosterSelect] = useState("")
    const [selectRoster, setSelectRoster] = useState(0)
    const [isDropdown, setIsDropdown] = useState(false)
    const [rosterList, setRosterList] = useState(rosters)
    const [characterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterLevel, setCharacterLevel] = useState(0)
    const [characterLopec, setCharacterLopec] = useState(0)
    const [characterZloa, setCharacterZloa] = useState(0)

    const dropdownSelect = (roster) => {
        setRosterSelect(roster)
        setIsDropdown(false)
    }

    return (
      <>
          <Roster rosterList={rosterList} setRosterList={setRosterList}/>
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
          <div>파티 등록</div>
          {
              raidList.map((item, index) => {
                  return (
                      <div className={"flex"} key={index}>
                          <p>{item}</p>
                          <input
                              type={"checkbox"}
                              checked={raidSelect === index}
                              onChange={()=>setRaidSelect(index)}
                          ></input>
                      </div>
                  )
              })
          }
          <div className={"Party"}>
              <div>파티 리스트</div>
              {partyList.map((item, index)=>{

                  return (
                      <div key={index}>
                          {item.members.map((member, index) => {
                              const character = characters[member]
                              return (
                                  <div key={index}>
                                      {<div className={"border"}>
                                      <div className="flex justify-between">
                                          <div>{character.class}</div>
                                          <div>템랩 : {character.level}</div>
                                      </div>
                                      <div>
                                          <div>{character.name}</div>
                                      </div>
                                      <div>
                                          <div className={"flex justify-between"}>
                                              <div>로펙 : {character.lopec}</div>
                                              <div>즐로아 : {character.zloa}</div>
                                          </div>
                                      </div>
                                  </div>}
                                  </div>
                              )
                          })}
                      </div>
                  )
              })}<div>
              </div>
              <div>
                  <div>1파티</div>
                  <div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
