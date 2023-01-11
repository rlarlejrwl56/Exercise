import {faPlus,faMinus ,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from 'react';

const Terms = (props) => {
    const esDiv = useRef([]);
    const checkDiv = useRef([]);
    const [moreEssential, setMoreEssentail] = useState(false);
    const [moreChoice, setMoreChoice] = useState(false);
    const [essential, setEssential] = useState({
        option1: false,
        option2: false,
        optionAll: false,
    });
    const [choice, setChoice] = useState({
        option1: false,
        option2: false,
        option3: false,
        optionAll: false,
    })

    const onClickAll = (select) => {
        if(select === 'es') {
            if (!essential.optionAll) {
                setEssential({
                    ...essential,
                    optionAll: true,
                    option1: true,
                    option2: true,
                });
            } else {
                setEssential({
                    ...essential,
                    optionAll: false,
                    option1: false,
                    option2: false,
                });
            }
        }
        if(select === 'ch'){
            if (!choice.optionAll) {
                setChoice({
                    ...choice,
                    optionAll: true,
                    option1: true,
                    option2: true,
                    option3: true,
                });
            } else {
                setChoice({
                    ...choice,
                    optionAll: false,
                    option1: false,
                    option2: false,
                    option3: false,
                });
            }
        }
    }
    const onClickMore = (select) => {
        if (select === 'es') {
            if (!moreEssential) {
                setMoreEssentail(true);
            } else {
                setMoreEssentail(false);
            }
        }
        if(select === 'ch'){
            if (!moreChoice) {
                setMoreChoice(true);
            } else {
                setMoreChoice(false);
            }
        }
    }
    const onClickOption = (select) => {
        if (select === 'op1') {
            if (essential.option1) {
                setEssential({
                    ...essential,
                    option1: false,
                    optionAll: false
                });
            } else {
                if (essential.option2 && !essential.option1) {
                    setEssential({
                        ...essential,
                        optionAll: true,
                        option1: true,
                    });
                } else {
                    setEssential({
                        ...essential,
                        option1: true,
                        optionAll: false
                    });
                }
            }
        }
        if (select === 'op2') {
            if (essential.option2) {
                setEssential({
                    ...essential,
                    option2: false,
                    optionAll: false
                });
            } else {
                if (essential.option1 && !essential.option2) {
                    setEssential({
                        ...essential,
                        optionAll: true,
                        option2: true,
                    });
                } else {
                    setEssential({
                        ...essential,
                        option2: true,
                        optionAll: false
                    });
                }
            }
        }
        if (select === 'opCh1') {
            if (choice.option1) {
                setChoice({
                    ...choice,
                    option1: false,
                    optionAll: false
                });
            } else {
                if (choice.option2 && choice.option3 && !choice.option1) {
                    setChoice({
                        ...choice,
                        optionAll: true,
                        option1: true,
                    });
                } else {
                    setChoice({
                        ...choice,
                        option1: true,
                        optionAll: false
                    });
                }
            }
        }
        if (select === 'opCh2') {
            if (choice.option2) {
                setChoice({
                    ...choice,
                    option2: false,
                    optionAll: false
                });
            } else {
                if (choice.option1 && choice.option3 && !choice.option2) {
                    setChoice({
                        ...choice,
                        optionAll: true,
                        option2: true,
                    });
                } else {
                    setChoice({
                        ...choice,
                        option2: true,
                        optionAll: false
                    });
                }
            }
        }
        if (select === 'opCh3') {
            if (choice.option3) {
                setChoice({
                    ...choice,
                    option3: false,
                    optionAll: false
                });
            } else {
                if (choice.option1 && choice.option2 && !choice.option3) {
                    setChoice({
                        ...choice,
                        optionAll: true,
                        option3: true,
                    });
                } else {
                    setChoice({
                        ...choice,
                        option3: true,
                        optionAll: false
                    });
                }
            }
        }
    }
    useEffect(() => {
        if (essential.optionAll) {
            checkDiv.current['all'].style.background = 'black';

        }else{
            checkDiv.current['all'].style.background = 'white';
        }
        if (choice.optionAll) {
            checkDiv.current['allCh'].style.background = 'black';
        }else{
            checkDiv.current['allCh'].style.background = 'white';
        }
        if(moreEssential) {
            if (essential.option1) {
                checkDiv.current['op1'].style.background = 'black';
            } else {
                checkDiv.current['op1'].style.background = 'white';
            }
            if (essential.option2) {
                checkDiv.current['op2'].style.background = 'black';
            } else {
                checkDiv.current['op2'].style.background = 'white';
            }
            if(essential.option1 && essential.option2){
                checkDiv.current['all'].style.background = 'black';
            }
        }
        if(moreChoice) {
            if (choice.option1) {
                checkDiv.current['opCh1'].style.background = 'black';
            } else {
                checkDiv.current['opCh1'].style.background = 'white';
            }
            if (choice.option2) {
                checkDiv.current['opCh2'].style.background = 'black';
            } else {
                checkDiv.current['opCh2'].style.background = 'white';
            }
            if (choice.option3) {
                checkDiv.current['opCh3'].style.background = 'black';
            } else {
                checkDiv.current['opCh3'].style.background = 'white';
            }
            if(choice.option1 && choice.option2 && choice.option3){
                checkDiv.current['allCh'].style.background = 'black';
            }
        }
        if(essential.optionAll){
            props.setIsTerms(true);
        }else {
            props.setIsTerms(false);
        }
        console.log(essential);
    }, [essential, moreEssential, choice, moreChoice]);

    return (
        <div>
            <div className='pt-10 flex'>
                <div className='flex flex-wrap w-full items-center'>
                    <button className='border w-6 h-6' onClick={() => {
                        onClickAll("es")
                    }} ref={(a) => {
                        checkDiv.current['all'] = a
                    }}/>
                    <div className='pl-2 text-sm font-normal'>[필수] 만 14세 이상이며 모두 동의합니다.</div>
                    <div className='ml-auto'>
                        <button onClick={() => {
                            onClickMore("es")
                        }}>{!moreEssential ? (<FontAwesomeIcon icon={faPlus}/>) : (<FontAwesomeIcon icon={faMinus}/>)}</button>
                    </div>
                </div>
            </div>
            {moreEssential ?
                (<div>
                    <div className='pt-4 pl-10 flex'>
                        <div className='flex flex-wrap w-full items-center'>
                            <button className='border w-6 h-6' onClick={() => {
                                onClickOption("op1")
                            }} ref={(a) => {
                                checkDiv.current['op1'] = a
                            }}/>
                            <div className='pl-2 text-sm font-normal'>이용약관 동의</div>
                            <div className='ml-auto'>
                                <button className='text-[12px] font-thin border-b'>내용 보기</button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4 pl-10 flex'>
                        <div className='flex flex-wrap w-full items-center'>
                            <button className='border w-6 h-6' onClick={() => {
                                onClickOption("op2")
                            }} ref={(a) => {
                                checkDiv.current['op2'] = a
                            }}/>
                            <div className='pl-2 text-sm font-normal'>개인정보 수집 및 이용 동의</div>
                            <div className='ml-auto'>
                                <button className='text-[12px] font-thin border-b'>내용 보기</button>
                            </div>
                        </div>
                    </div>
                </div>) : null}
            <div className='pt-4 flex'>
                <div className='flex flex-wrap w-full items-center'>
                    <button className='border w-6 h-6' onClick={() => {
                        onClickAll("ch")
                    }} ref={(a) => {
                        checkDiv.current['allCh'] = a
                    }}/>
                    <div className='pl-2 text-sm font-normal'>[선택] 광고성 정보 수신에 모두 동의합니다.</div>
                    <div className='ml-auto'>
                        <button onClick={() => {
                            onClickMore("ch")
                        }}>{!moreChoice ? (<FontAwesomeIcon icon={faPlus}/>) : (<FontAwesomeIcon icon={faMinus}/>)}</button>
                    </div>
                </div>
            </div>
            {moreChoice ?
                (<div>
                    <div className='pt-4 pl-10 flex'>
                        <div className='flex flex-wrap w-full items-center'>
                            <button className='border w-6 h-6' onClick={() => {
                                onClickOption("opCh1")
                            }} ref={(a) => {
                                checkDiv.current['opCh1'] = a
                            }}/>
                            <div className='pl-2 text-sm font-normal'> 앱 푸시</div>
                        </div>
                    </div>
                    <div className='pt-4 pl-10 flex'>
                        <div className='flex flex-wrap w-full items-center'>
                            <button className='border w-6 h-6' onClick={() => {
                                onClickOption("opCh2")
                            }} ref={(a) => {
                                checkDiv.current['opCh2'] = a
                            }}/>
                            <div className='pl-2 text-sm font-normal'> 문자 메시지</div>
                        </div>
                    </div>
                    <div className='pt-4 pl-10 flex'>
                        <div className='flex flex-wrap w-full items-center'>
                            <button className='border w-6 h-6' onClick={() => {
                                onClickOption("opCh3")
                            }} ref={(a) => {
                                checkDiv.current['opCh3'] = a
                            }}/>
                            <div className='pl-2 text-sm font-normal'> 이메일</div>
                        </div>
                    </div>
                </div>) : null}
        </div>
    )
}
export default Terms;