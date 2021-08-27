let myMap = new Map();
    let MAXCOUNT = 10;
    let count = 1, countI = 0, countJ = 0, countK = 0, countL = 0, countM = 0, countN = 0;
    let i = 1, j = 1, k = 1, l = 1, m = 1, n = 1;
     
    while ( (i <= MAXCOUNT) && (j <= MAXCOUNT) && (k <= MAXCOUNT) && (l <= MAXCOUNT) && (m <= MAXCOUNT) && (n <= MAXCOUNT) ) {
        let die_roll = Math.floor ( Math.random() * 6 ) + 1;
        myMap.set(count, die_roll);
        switch(die_roll) {
            case 1:
                while ( countI <= MAXCOUNT ) {
                    countI++;
                    i++;
                    break;
                }
                break;
            case 2:
                while ( countJ <= MAXCOUNT ) {
                    countJ++;
                    j++;
                    break;
                }
                break;
            case 3:
                while ( countK <= MAXCOUNT ) {
                    countK++;
                    k++;
                    break;
                }
                break;
            case 4:
                while ( countL <= MAXCOUNT ) {
                    countL++;
                    l++;
                    break;
                }
                break;
            case 5:
                while ( countM <= MAXCOUNT ) {
                    countM++;
                    m++;
                    break;
                }
                break;
            case 6:
                while ( countN <= MAXCOUNT ) {
                    countN++;
                    n++;
                    break;
                }
                break;                
        }
        count++;
    }
    
    console.log(myMap);
    
    if ( countI == MAXCOUNT ) {
        console.log ("1 has reached maximum count.");
    }
    else if( countJ == MAXCOUNT ) {
        console.log ("2 has reached maximum count.");
    }
    else if( countK == MAXCOUNT ) {
        console.log ("3 has reached maximum count.");
    }
    else if( countL == MAXCOUNT ) {
        console.log ("4 has reached maximum count.");
    }
    else if( countM == MAXCOUNT ) {
        console.log ("5 has reached maximum count.");
    }
    else if( countN == MAXCOUNT ) {
        console.log ("6 has reached maximum count.");
    }
    
    if ( (countI < countJ) && (countI < countK) && (countI < countL) && (countI < countM) && (countI < countN) ) {
        console.log ("1 has reached minimum count.");
    }
    else if( (countJ < countI) && (countJ < countK) && (countJ < countL) && (countJ < countM) && (countJ < countN) ) {
        console.log ("2 has reached minimum count.");
    }
    else if( (countK < countI) && (countK < countJ) && (countK < countL) && (countK < countM) && (countK < countN) ) {
        console.log ("3 has reached minimum count.");
    }
    else if( (countL < countI) && (countL < countJ) && (countL < countK) && (countL < countM) && (countL < countN) ) {
        console.log ("4 has reached minimum count.");
    }
    else if( (countM < countI) && (countM < countJ) && (countM < countK) && (countM < countL) && (countM < countN) ) {
        console.log ("5 has reached minimum count.");
    }
    else if( (countN < countI) && (countN < countK) && (countN < countL) && (countN < countM) && (countN < countJ) ) {
        console.log ("6 has reached minimum count.");
    }