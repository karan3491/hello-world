let str= '#abb#cc#dwq##';
let str3='aa#ba#ca#dd#e#';

//abcdd#e#

//
const removeHas=(str)=>{
    let l= str.length;
    let arr=[];
    for(let i=0; i<str.length; i++){
        if(str[i]== '#'){
            arr.pop();
        }else{
            arr.push(str[i]);
        }
    }
    return arr;
};

let a=removeHas(str);
let b=removeHas(str3);

console.log(a)
console.log(b)


let obj=[{name: 'sai'},{name: 'nang'},{name: 'sai'},{name:'nang'}, {name: '111225'}]

const uniqueObj=(obj)=>{
    let arr=[];
    for(let o in obj){
        console.log(obj[o].name)
        if(arr.indexOf(obj[o].name) === -1)
          arr.push(obj[o].name)
    }
    
    console.log(arr)
}
uniqueObj(obj);




let str1 = "geeksforgeeks"; 
let str2 = "geegeeksksfor";
///only using one object to store frequency
function validAnagram(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }
    let lookup = {}
    for (let char of str1) {
        lookup[char] ? lookup[char]+=1 : lookup[char]=1
    }

    for (let char of str2) {
        if (lookup[char]) {
            lookup[char] -= 1;
        } else {
            return false
        }
    }
    return true
}

console.log(validAnagram(str1,str2))

let array1=[1,2,3,4];
let array2=[2,4,6,4];

const twoArray=(arr1,arr2)=>{
    
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
      let currentIndex=  arr2.indexOf(arr1[i] * 2);
      if(currentIndex === -1){
          return false;
      }
      arr2.splice(currentIndex, 1);
    }
    return true;
}

console.log(twoArray(array1, array2))


let array4=[0,3,4,31];
let array5=[4,6,30];

let array3=[...array4,...array5];

console.log(array3)

const sortArray=(arr)=>{
  for(let i=0; i<arr.length-1; i++){
      for(let j=0; j<arr.length-i-1; j++){
          if(arr[j]> arr[j+1]){
              let temp=arr[j];
              arr[j]= arr[j+1];
              arr[j+1]= temp;
          }
      }
  } 
    return arr;
}

console.log(sortArray(array3))



const facotorialNumber=(num)=>{
    let newNum=1;
for(let i=1; i<=num; i++){
    newNum *= i;
}
  return newNum;  
}

console.log(facotorialNumber(3))




///Reverse Array

let array=[1,2,3,4,5,6,7,8,9];

const reversArray=(arr)=>{
    let a=[];
    for(let i=arr.length-1; i>=0; i--){
        a.push(arr[i]);
    }
    return a;
};

console.log(reversArray(array));






// revers string
let string1="abcdef";

// factorial
const factorial=(num)=>{
    let result=1;
    for(let i=1; i<=num;i++){
        result *=i;
    
    }
    return result;
}

console.log(factorial(3))

const reversString=(str)=>{
    let reversVariable='';
    for(let i= str.length-1; i>=0; i--){
        reversVariable +=str[i]
    }
    return reversVariable;
}

console.log(reversString(string1))

// find the longest words

let string= "Discover AnyDesk, the secure and intuitive remote desktop app with innovative features, perfect for seamless remote desktop application across devices.";

const longestNumberwithoutSplit=(str)=>{
    let longnum='';
    let longWord='';
    for(let i=0; i<str.length;i++){
        let char= str[i];
        if(char ===' '){
            if(longnum.length > longWord.length){
                longWord= longnum;
            }
            longnum= '';
        }else{
           longnum +=char; 
        }
    }
    
    if(longnum.length > longWord.length){
                longWord= longnum;
    }
    return longWord
}




console.log(longestNumberwithoutSplit(string))
const longestNumber=(str)=>{
    let strSplit= str.split(" ");
    let longestNumber=0;
    let longestWord=null;
    for(let i=0; i<strSplit.length; i++){
        
        if(strSplit[i].length > longestNumber){
            longestNumber= strSplit[i].length
            longestWord=strSplit[i]
        }
        
    }
    return longestWord;
}
console.log(longestNumber(string))




// palindrome
let num=1234321;

const palindrome=(number)=>{
    let str=number.toString();
    let len=str.length;
    for(let i=0; i<len/2; i++){
        if(str[i] !== str[len-i-1]){
            return false
        }
    }
    
    return true;
    
}

if(palindrome(num)){
    console.log('yes')
}else{
     console.log('no')
}