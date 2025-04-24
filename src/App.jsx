import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Roster} from "./component/roster/Roster.jsx";
import {Character} from "./component/character/Character.jsx";

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
    const [rosterList, setRosterList] = useState(rosters)


    return (
      <>
          <Roster rosterList={rosterList} setRosterList={setRosterList}/>
          <Character rosterList={rosterList}/>
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
