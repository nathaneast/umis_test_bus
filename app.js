const busData = [
  {
    number: '1-1',
    timetable: {
      weekday: [
        { name: '정류장 A', arrive: '09:00' },
        { name: '정류장 b', arrive: '09:20' },
        { name: '정류장 D', arrive: '09:45' },
        { name: '정류장 e', arrive: '10:00' },
        { name: '정류장 F', arrive: '10:20' },
        { name: '정류장 a', arrive: '10:50' },
      ],
      weekend: [],
    },
  },
  {
    number: '50',
    timetable: {
      weekday: [
        { name: '정류장 a', arrive: '09:10' },
        { name: '정류장 B', arrive: '09:35' },
        { name: '정류장 E', arrive: '09:50' },
        { name: '정류장 f', arrive: '10:20' },
        { name: '정류장 G', arrive: '10:30' },
      ],
      weekend: [],
    },
  },
];

// 현재 시간 < 해당 버스 시간을 비교
const checkingBusTime = (currentTime, targetTime) => {
  const a = Number(currentTime.split(':').join(''));
  const b = Number(targetTime.split(':').join(''));

  return a < b
}

// 요일에 따른 key 값 리턴 
const checkingDay = (n) => {
  if(n === 0 || n === 6) {
    return 'weekend';
  } else {
    return 'weekday';
  }
}

const busAllam = (busNums) => {
  const busNumsArr = busNums.split(' ');
  const currentTime = '10:10'; 
  const targetDay = checkingDay(1);
  // 예제와 같은 값 지정

  // const date = new Date();
  // const currentTime = `${date.getHours()}:${date.getMinutes()}`;
  // const targetDay = checkingDay(date.getDay());

  busNumsArr.forEach((n) => {
    let isBusNum = false;
    let busStop;

    for (let i = 0; i < busData.length; i++) {
      if (busData[i].number === n) {
        isBusNum = true;
        const findedBusRunning = busData[i].timetable[targetDay].find(item => (
          checkingBusTime(currentTime, item.arrive)
        ));
        // 현재 운행중인 버스를 찾음
        busStop = findedBusRunning ? findedBusRunning.name : '';
        break;
      }
    }

    if (!isBusNum) {
      return console.log(`${n}번 버스는 존재하지 않습니다.`);
    } 

    if (busStop) {
      console.log(`${n}번 버스는 ${busStop}를 향해 운행하고 있습니다.`);
    } else {
      console.log(`${n}번 버스는 운행이 종료되었습니다.`);
    }
  });
};

busAllam('50 1-1 30');
