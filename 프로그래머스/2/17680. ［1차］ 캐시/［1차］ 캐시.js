function solution(cacheSize, cities) {
    // lru : 가장 오래된 데이터를 빼고 최신 데이터를 넣는 알고리즘
    // hit -> 데이터가 이미 있다면 1 / 해당 도시는 캐시에서 가장 최근으로 갱신
    // miss -> 데이터가 없으면 5 / 캐시 크기에 따라 가장 오래된 데이터 제거
    // 무조건 miss 일 경우는 cities의 전체 길이 * 5
    if(cacheSize === 0) return cities.length * 5
    
    const cache = [];
    let totalTime = 0;
    
    for(const city of cities){
        const lowerCityName = city.toLowerCase();
        
        if(cache.includes(lowerCityName)){
            totalTime += 1;
            cache.splice(cache.indexOf(lowerCityName), 1)
        } else {
            totalTime += 5;
            // 캐시 다 찼다면 오래된 데이터 제거 후 추가
            if(cache.length >= cacheSize){
                cache.shift();
            }
        }
        cache.push(lowerCityName);
    }
    return totalTime;
}