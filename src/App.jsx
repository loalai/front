import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

const raidList = [
    "강습 : 멸망의 불꽃, 타르칼",
    "3막: 칠흑, 폭풍의 밤",
    "2막: 부유하는 악몽의 진혼곡",
    "1막: 대지를 부수는 업화의 궤적",
    "폭풍의 지휘관, 베히모스",
    "서막: 붉어진 백야의 나선",
]
 const rosters = [
     {id:1, roster:"잘익은도토리"},
     {id:2, roster:"덜익은도토리"},
     {id:3, roster:"추쌤"},
     {id:4, roster:"명배"},
     {id:5, roster:"빙글빙글스탭"},
     {id:6, roster:"빙글빙글간격"},
     {id:7, roster:"샤프테드"},
     {id:8, roster:"레디"},
     {id:9, roster:"냅무세"}
 ]

const characters = [
    {id: 1, roster: "샤프테드", name:"지는쪽은서포터가되는걸로",class: "홀리나이트", level:1701.6, lopec:1000, zloa:1000}
]

const partyList = [
    {
        id: 1,
        raidType: "강습 : 멸망의 불꽃, 타르칼",
        members: [1,1,1,1,1,1,1,1]
    }
]


function App() {
    const [raidSelect, setRaidSelect] = useState(0)
    const [rosterList, setRosterList] = useState(rosters)
    const [selectRoster, setSelectRoster] = useState(0)

    useEffect( () => {

        // 1. 원정대 불러오기
        // 2. 원정대
    })

    const rosterRead = async () => {
        //const response = await axios.get("http://localhost:8080/api/v1/rosterlist")
        // setRosterList(response.data)
    }

    const rosterSearch = async () => {

    }

    const rosterCreate = async (rosterName) => {
        // isPresent = await rosterSearch(rosterName)
        // isPresent && return null
        // await axios.put("http://localhost:8080/api/v1/rostercreate", rosterName)

    }

    const rosterUpdate = () => {
        return null
    }

    const rosterDelete = () => {
        return null
    }

    return (
      <>
          <div className="Roster">
              <div>원정대 등록</div>
              <input className={"border"}></input>
              <button className={"hover:cursor-pointer border"}>버튼</button>
              {rosterList.map((item, index) => {
                  return (
                      <div key={index}>
                          {item.roster}
                      </div>
                  )
              })}
              <div>
              </div>
          </div>
          <div>캐릭터 등록</div>
          <input className={"border"}></input>
          <button className={"hover:cursor-pointer border"}>버튼</button>
          <div>파티 등록</div>
          {
              raidList.map((item, index) => {
                  return (
                      <div className={"flex"} key={index}>
                          <p>{item}</p>
                          <input
                              type={"checkbox"}
                              checked={raidSelect === index}
                              onClick={()=>setRaidSelect(index)}
                          ></input>
                      </div>
                  )
              })
          }
          <div>
              <div>레이드 인원</div>
              <div>
                  <div>1파티</div>
                  <div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
                      <div className={"border"}>
                          <div className="flex justify-between">
                              <div>홀리나이트</div>
                              <div>템랩 : 1700</div>
                          </div>
                          <div>
                              <div>지는쪽은서포터가되는걸로</div>
                          </div>
                          <div>
                              <div className={"flex justify-between"}>
                                  <div>로펙 : 1000</div>
                                  <div>즐로아 : 1000</div>
                              </div>
                          </div>
                      </div>
                      <div className={"border"}>
                          <div className="flex justify-between">
                              <div>홀리나이트</div>
                              <div>템랩 : 1700</div>
                          </div>
                          <div>
                              <div>지는쪽은서포터가되는걸로</div>
                          </div>
                          <div>
                              <div className={"flex justify-between"}>
                                  <div>로펙 : 1000</div>
                                  <div>즐로아 : 1000</div>
                              </div>
                          </div>
                      </div>
                      <div className={"border"}>
                          <div className="flex justify-between">
                              <div>홀리나이트</div>
                              <div>템랩 : 1700</div>
                          </div>
                          <div>
                              <div>지는쪽은서포터가되는걸로</div>
                          </div>
                          <div>
                              <div className={"flex justify-between"}>
                                  <div>로펙 : 1000</div>
                                  <div>즐로아 : 1000</div>
                              </div>
                          </div>
                      </div>
                      <div className={"border"}>
                          <div className="flex justify-between">
                              <div>홀리나이트</div>
                              <div>템랩 : 1700</div>
                          </div>
                          <div>
                              <div>지는쪽은서포터가되는걸로</div>
                          </div>
                          <div>
                              <div className={"flex justify-between"}>
                                  <div>로펙 : 1000</div>
                                  <div>즐로아 : 1000</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
