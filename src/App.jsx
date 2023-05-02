import './App.css';
import Switcher from "./Switcher"
import Firstcard from './Components/Firstcard';
import Secondcard from './Components/Secondcard';

//Pictures
import navbar from "./Pictures/navbar.png"
import youtube from "./Pictures/youtube.png"
import instagram from "./Pictures/instagram.png"
import vk from "./Pictures/vk.png"
import whatsapp from "./Pictures/whatsapp.png"
import telegram from "./Pictures/telegram.png"
import circle from "./Pictures/circle.png"
import home1 from "./Pictures/home1.png"
import home2 from "./Pictures/home2.png"
import home3 from "./Pictures/home3.png"
import home4 from "./Pictures/home4.png"
import house from "./Pictures/house.png"
import right from "./Pictures/right.png"
import left from "./Pictures/left.png"
import image1 from "./Pictures/image1.png"
import image2 from "./Pictures/image2.png"
import image3 from "./Pictures/image3.png"
import image4 from "./Pictures/image4.png"
import image5 from "./Pictures/image5.png"
import image6 from "./Pictures/image6.png"
import image7 from "./Pictures/image7.png"
import image8 from "./Pictures/image8.png"
import house1 from "./Pictures/house1.png"
import exclude from "./Pictures/Exclude.png"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./i18next"

function App() {

  const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }

  return (
    <div className="App">
      <div className="container">

      <div className="navbar dark:bg-[black] flex justify-evenly pt-[30px] pb-[20px]">
        <div className="navbar-one">
          <div className="navbar-text-p flex justify-center"><p>{t("text1")}</p></div>
          <div className="navbar-image flex justify-center"><img src={navbar} alt="" /></div>
        </div>

        <div className="navbar-two pt-[10px]">
          <div className="navbar-two-text flex justify-center"><p>{t("text2")}</p></div>
          <div className="navbar-two-text flex justify-center"><p>{t("text3")}</p></div>
          <div className="navbar-two-text flex justify-center"><p>{t("text4")}</p></div>
        </div>

        <div className="navbar-third pt-[8px]">
          <div className="navbar-third-text flex justify-center"><p>+7 (495) 142-07-25</p></div>
          <div className="navbar-third-text flex justify-center"><p>+7 (977) 908-02-50</p></div>
        </div>

        <div className="navbar-fourth">
          <div className="navbar-fourth-button flex justify-center"><button>{t("text5")}</button></div>
          <div className="navbar-social-image flex justify-center gap-[10px] pt-[10px]">
            <div className="img-soc"><img src={youtube} alt="" /></div>
            <div className="img-soc"><img src={instagram} alt="" /></div>
            <div className="img-soc"><img src={vk} alt="" /></div>
            <div className="img-soc"><img src={whatsapp} alt="" /></div>
            <div className="img-soc"><img src={telegram} alt="" /></div>
          </div>
        </div>

      </div>

        
        <div className="pages dark:bg-[black]">
          <div className="page">
            <ul className=" flex justify-evenly pt-[22px]">
              <li className='yellow-li flex justify-center'>{t("text6")}</li>
              <li className='flex justify-center'>{t("text7")}</li>
              <li className='flex justify-center'>{t("text8")}</li>
              <li className='flex justify-center'>{t("text9")}</li>
              <li className='flex justify-center'>{t("text10")}</li>
              <li className='flex justify-center'>{t("text11")}</li>
              <li className='select-li flex justify-center'>
                <select value={lng} onChange={handleChange} >
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                  <option value="tj">TJ</option>
                </select>
              </li>
              <li className='flex justify-center'><Switcher /></li>
            </ul>
          </div>
        </div>


        <div className="light-pages dark:bg-[black]">
          <ul className=" flex justify-evenly pt-[17px] gap-[50px]">
            <li>{t("text12")}</li>
            <li>{t("text13")}</li>
            <li>{t("text14")}</li>
            <li>{t("text15")}</li>
            <li>{t("text16")}</li>
          </ul>
        </div>


          <div className="content">
            <div className="content-text flex justify-start pl-[60px] pt-[150px]"><h1>{t("text17")}</h1></div>
            <div className="content-title flex justify-start pl-[60px] pt-[30px]"><p>{t("text18")}</p></div>

            <div className="middle-content flex justify-start gap-[50px] pt-[25px]">
              <div className="middle-left flex justify-center pl-[50px]"><img src={circle} alt="" /></div>
              <div className="middle-right  flex justify-center pt-[15px]"><p>{t("text19")}</p></div>
            </div>

          </div>

            <div className="some-text dark:bg-[black] flex justify-start pl-[60px] pt-[40px] ">
              <div ><h1 className='dark:text-[white]'>{t("text20")}</h1></div>
            </div>

            
             <div className="button-color flex justify-start gap-[40px] pl-[60px] pt-[20px] dark:bg-[black]">
              <div className="color flex justify-center"><button>{t("text21")}</button></div>
              <div className="color1 flex justify-center"><button>{t("text22")}</button></div>
              <div className="color1 flex justify-center"><button>{t("text23")}</button></div>
              <div className="color1 flex justify-center"><button>{t("text24")}</button></div>
              <div className="color1 flex justify-center"><button>{t("text25")}</button></div>
             </div>

             
              <div className="Firstcard flex justify-evenly dark:bg-[black] pt-[40px]">
                <Firstcard img={home1} text={t("text26")}  lefttext={t("text27")} righttext={t("text28")}  
                 leftte={t("text29")}  rightte={t("text30")}
                 leftxt={t("text31")}  rightxt={t("text32")}
                 money={t("text33")}/>

                <Firstcard img={home2} text={t("text26")}  lefttext={t("text27")} righttext={t("text28")}  
                 leftte={t("text29")}  rightte={t("text30")}
                 leftxt={t("text31")}  rightxt={t("text32")}
                 money={t("text33")}/>


                 <Firstcard img={home3} text={t("text26")}  lefttext={t("text27")} righttext={t("text28")}  
                 leftte={t("text29")}  rightte={t("text30")}
                 leftxt={t("text31")}  rightxt={t("text32")}
                 money={t("text33")}/>


                 <Firstcard img={home4} text={t("text26")}  lefttext={t("text27")} righttext={t("text28")}  
                 leftte={t("text29")}  rightte={t("text30")}
                 leftxt={t("text31")}  rightxt={t("text32")}
                 money={t("text33")}/>
              </div>

              <div className="blue-button flex justify-center pt-[40px] pb-[30px] dark:bg-[black]">
                <button>{t("text34")}</button>
              </div>


              <div className="house dark:bg-[black]">
                <div className="home flex justify-between ">
                  <div className="home-left"><img src={house} alt="" /></div>
                  <div className="home-right">
                    <div className="home-text flex justify-center dark:text-[white] pt-[30px]"><h1>{t("text35")}</h1></div>
                    <div className="home-button flex justify-start dark:text-[white] pt-[30px]"><button>{t("text36")}</button></div>

                    <div className="middle-home flex justify-end dark:text-[white] gap-[20px] pt-[160px] pr-[60px]">
                        <div className="home-middle-one flex justify-center"><img src={right} alt="" /></div>
                        <div className="home-middle-one flex justify-center"><p className='right-php'>1/2</p></div>
                        <div className="home-middle-one flex justify-center"><img src={left} alt="" /></div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="some-text flex justify-start pl-[60px] pt-[40px] pb-[30px] dark:bg-[black] ">
              <div className="dark:text-[white]" ><h1>{t("text37")}</h1></div>
            </div>

            <div className="Second dark:bg-[black]">
              <div className="Secondcard">
                 <Secondcard text={t("text38")} title={t("text39")} img={image1} />
                 <Secondcard text={t("text40")} title={t("text41")} img={image2} />
                 <Secondcard text={t("text42")} title={t("text43")} img={image3} />
                 <Secondcard text={t("text44")} title={t("text45")} img={image4} />
                 <Secondcard text={t("text46")} title={t("text47")} img={image5} />
                 <Secondcard text={t("text48")} title={t("text49")} img={image6} />
                 <Secondcard text={t("text50")} title={t("text51")} img={image7} />
                 <Secondcard text={t("text52")} title={t("text53")} img={image8} />
              </div>
            </div>

             
              <div className="Gray dark:bg-black">
                <div className="gray flex justify-evenly pt-[80px]">
                  <div className="gray-left">
                    <div className="gray-text flex justify-center"><h1 className='dark:text-[white]'>{t("text54")}</h1></div>
                    <div className="gray-title flex justify-center"><p>{t("text55")}</p></div>
                  </div>
                  <div className="gray-right flex justify-center pt-[50px]">
                      <button>{t("text56")}</button>
                  </div>
                </div>
              </div>


              <div className="house pb-[40px] dark:bg-black">
                <div className="home flex justify-between ">
                  <div className=" home-left pt-[20px]"><img src={house1} alt="" /></div>
                  <div className="home-right pr-[60px]">
                    <div className="home-text flex justify-center pt-[30px]"><h1 className='dark:text-[white]'>{t("text57")}</h1></div>
                    <div className="home-title pt-[10px]  flex justify-center"><p>{t("text58")}</p></div>
                    <div className="home-title pt-[10px]  flex justify-center"><p>{t("text59")}</p></div>
                    <div className="home-button flex justify-center pt-[30px]"><button className='dark:text-[white]'>{t("text60")}</button></div>

                  </div>
                </div>
              </div>

                
                <div className="maps ">
                  <div className="map flex justify-evenly gap-[300px] ">
                    <div className="map-left">
                      <div className="contacts flex justify-start ">
                         <div className="contact  dark:bg-black">
                          <div className="contact-text flex justify-center pt-[10px]"><h1 className='dark:text-[white]'>{t("text61")}</h1></div>
                          <div className="contact-title flex justify-center pt-[20px]"><p className='dark:text-[white]'>{t("text62")}</p></div>
                          <div className="contact-ul pt-[10px] flex justify-center"><p className='dark:text-[white]'>{t("text63")}</p></div>
                          <div className="contact-ul pt-[10px]  flex justify-center"><p className='dark:text-[white]'>{t("text64")}</p></div>
                          <div className="contact-ul  pt-[10px] flex justify-center"><p className='dark:text-[white]'>{t("text65")}</p></div>
                          <div className="contact-title flex justify-center pt-[20px]"><p className='dark:text-white'>{t("text66")}</p></div>

                          <div className="contact-social flex justify-center gap-[30px] pt-[20px]">
                            <div className="soc-left">
                              <p className='dark:text-[white]'>{t("text67")}</p>
                              <p className='dark:text-[white]'>{t("text68")}</p>
                            </div>
                            <div className="soc-right">
                              <p className="flex justify-center dark:text-[white]">{t("text69")}</p>
                              <div className="mine flex justify-center gap-[10px] pt-[10px]">
                                <div className="mine-img"><img src={youtube} alt="" /></div>
                                <div className="mine-img"><img src={instagram} alt="" /></div>
                                <div className="mine-img"><img src={vk} alt="" /></div>
                                <div className="mine-img"><img src={whatsapp} alt="" /></div>
                                <div className="mine-img"><img src={telegram} alt="" /></div>
                              </div>
                            </div>
                          </div>

                          <div className="but-soc flex justify-center pt-[20px]">
                            <button>{t("text70")}</button>
                          </div>

                         </div>
                      </div>
                    </div>
                    <div className="map-right pt-[250px]"><img src={exclude} alt="" /></div>
                  </div>
                </div>

                  
                  <div className="finish bg-[#22242E] dark:bg-[black]">
                  <div className="navbar flex justify-evenly pt-[30px] pb-[20px]">
        <div className="navbar-one">
          <div className="navbar-text-p flex justify-center"><p>{t("text71")}</p></div>
          <div className="navbar-image flex justify-center"><img src={navbar} alt="" /></div>
        </div>

        <div className="navbar-two pt-[10px]">
          <div className="navbar-two-text flex justify-center"><p>{t("text72")}</p></div>
          <div className="navbar-two-text flex justify-center"><p>{t("text73")}</p></div>
          <div className="navbar-two-text flex justify-center"><p>{t("text74")}</p></div>
        </div>

        <div className="navbar-third pt-[8px]">
          <div className="navbar-third-text flex justify-center "><p >{t("text75")}</p></div>
          <div className="navbar-third-text flex justify-center"><p>{t("text76")}</p></div>
        </div>

        <div className="navbar-fourth">
          <div className="navbar-fourth-button flex justify-center"><button>{t("text70")}</button></div>
          <div className="navbar-social-image flex justify-center gap-[10px] pt-[10px]">
            <div className="img-soc"><img src={youtube} alt="" /></div>
            <div className="img-soc"><img src={instagram} alt="" /></div>
            <div className="img-soc"><img src={vk} alt="" /></div>
            <div className="img-soc"><img src={whatsapp} alt="" /></div>
            <div className="img-soc"><img src={telegram} alt="" /></div>
          </div>
        </div>

                 </div>
                  </div>

                    
                    <div className="footers bg-[#22242E] dark:bg-[black]">
                      <div className="white-div flex justify- pt-[20px]"><div className="white"></div></div>

                      <div className="footer flex justify-evenly pt-[70px] gap-[20px]">
                        <div className="mine-one">
                        <div className="footer-one"> 
                        <div className="footter-text flex justify-start"><h1>{t("text78")}</h1></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text79")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text80")}</p></div>
                        <div className="footer-title pt-[10px]  flex justify-start"><p>{t("text81")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text82")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text83")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text84")}</p></div>
                        </div>
                        </div>
                        

                        <div className="mine-one">
                        <div className="footer-one"> 
                        <div className="footter-text flex justify-start"><h1>{t("text85")}</h1></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text86")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text87")}</p></div>
                        <div className="footer-title pt-[10px]  flex justify-start"><p>{t("text88")}</p></div>
                        <div className="footer-title pt-[10px]  flex justify-start"><p>{t("text89")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text90")}</p></div>
                        </div>
                        </div>

                       <div className="mine-one">
                       <div className="footer-one"> 
                        <div className="footter-text flex justify-start"><h1>{t("text91")}</h1></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text92")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text93")}</p></div>
                        <div className="footer-title pt-[10px]  flex justify-start"><p>{t("text94")}</p></div>
                        <div className="footer-title pt-[10px]  flex justify-start"><p>{t("text95")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text96")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text97")}</p></div>
                        </div>
                       </div>

                        <div className="mine-one">
                        <div className="footer-one"> 
                        <div className="footter-text flex justify-start"><h1>{t("text98")}</h1></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text99")}</p></div>
                        <div className="footer-title pt-[10px] flex justify-start"><p>{t("text100")}</p></div>
                        <div className="footer-title pt-[10px]  flex justify-start"><p>{t("text101")}</p></div>
                        </div>
                        </div>
                        

                          <div className="mine-one">
                          <div className="footer-one"> 
                        <div className="footer-button flex justify-center"><button>{t("text102")}</button></div>
                        <div className="footer-button flex justify-center pt-[20px]"><button>{t("text103")}</button></div>
                        </div>
                          </div>
                                 
                      </div>

                      <div className="white-div flex justify-center pt-[40px]"><div className="white"></div></div>

                    </div>
               
                     <div className="last-one bg-[#22242E] dark:bg-[black]">
                         <div className="last flex justify-evenly pt-[20px] pb-[20px]">
                          <div className="last-left flex justify-center"><p>{t("text104")}</p></div>
                          <div className="last-left flex justify-center"><p>{t("text105")}</p></div>
                          <div className="last-left flex justify-center"><p>{t("text106")}</p></div>
                          <div className="last-left flex justify-center"><p>{t("text107")}</p></div>
                         </div>
                     </div>








      </div>
    </div>
  );
}

export default App;
