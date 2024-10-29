// *1 - a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

function createThreeDigitNumber(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log(0);
    return;
  }
  const threeDigitNumber = a * 100 + b * 10 + c;
  console.log(threeDigitNumber);
}
createThreeDigitNumber(5, 7, 3);
createThreeDigitNumber(0, 6, 4);
createThreeDigitNumber(9, 2, 1);
createThreeDigitNumber(3, -1, 8);

//  =========================================================================================

// *2 - Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin

function getDayOfWeek(day) {
  switch (day) {
    case 1:
      console.log("Dushanba");
      break;
    case 2:
      console.log("Seshanba");
      break;
    case 3:
      console.log("Chorshanba");
      break;
    case 4:
      console.log("Payshanba");
      break;
    case 5:
      console.log("Juma");
      break;
    case 6:
      console.log("Shanba");
      break;
    case 7:
      console.log("Yakshanba");
      break;
    default:
      console.log("none");
      break;
  }
}

getDayOfWeek(1);
getDayOfWeek(3);
getDayOfWeek(7);
getDayOfWeek(9);

// ===============================================================================================

// *3 - Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isLeapYear(2020);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2023);

// =================================================================================
// *4 - a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.

function countDigits(a) {
  if (a < 1 || a > 999) {
    return "Son 1-999 orasida bo'lishi kerak";
  }

  if (a < 10) {
    return 1;
  } else if (a < 100) {
    return 2;
  } else {
    return 3;
  }
}

console.log(countDigits(5));
console.log(countDigits(45));
console.log(countDigits(999));
console.log(countDigits(1000));

// =============================================================================================
// *5 - a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.

function areAllPositive(a, b, c, d) {
  if (a > 0 && b > 0 && c > 0 && d > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

areAllPositive(5, 10, 15, 20);
areAllPositive(-1, 10, 15, 20);
areAllPositive(1, 0, 3, 4);
areAllPositive(5, 10, 15, 25);

// =================================================================================================
// *6 - a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

function sumUpTo(a) {
  //
  let sum = 0;

  for (let i = 0; i <= a; i++) {
    sum += i;
  }

  console.log(sum);
}

sumUpTo(5);
sumUpTo(10);
sumUpTo(0);

// ==================================================================================================
// *7 - a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas

function isPerfectNumber(a) {
  let sum = 0;

  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  if (sum === a) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPerfectNumber(6);
isPerfectNumber(15);
isPerfectNumber(28);
isPerfectNumber(12);

// ====================================================================================
// *8 - n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

function countDigits(n) {
  let digits = n.toString().length;
  console.log(`Raqamlari soni: ${digits}`);
}

countDigits(123);
countDigits(4567);
countDigits(89);
countDigits(0);

// ===============================================================================================
// *9 - n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz.

function isPalindrome(n) {
  let str = n.toString();
  let isPalin = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalin = false;
      break;
    }
  }

  console.log(isPalin);
}

isPalindrome(12321);
isPalindrome(12345);
isPalindrome(45654);
isPalindrome(123321);

// =====================================================================================================
// *10 - n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.

function sumOfDigits(n) {
  let sum = 0;
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i], 10);
  }

  console.log(`Raqamlar yig'indisi: ${sum}`);
}

sumOfDigits(123);
sumOfDigits(4567);
sumOfDigits(89);
sumOfDigits(0);

// =====================================================================================

// *11 - array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.

function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  console.log(reversedArray);
}

reverseArray([1, 2, 3, 4, 5]);

// ==========================================================================

// *12 - n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.

function countOccurrences(n, array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      count++;
    }
  }
  console.log(`Bu yerda ${count} ta ${n} bor.`);
}

countOccurrences(4, [2, 4, 6, 4]);

// ============================================================================

// *13 - a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.

function findPairWithSum(a, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === a) {
        console.log(`Yig'indi: ${array[i]} + ${array[j]} = ${a}`);
      }
    }
  }
}

findPairWithSum(10, [1, 2, 3, 7, 5]);

// ===================================================================================

// *14 - Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.

function sortArrayAscending(array) {
  let sortedArray = array.sort((a, b) => a - b);
  console.log(sortedArray);
}

sortArrayAscending([5, 2, 9, 1, 5, 6]);

// =============================================================================================

// *15 - Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.

function secondLargest(array) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      second = first;
      first = array[i];
    } else if (array[i] > second && array[i] !== first) {
      second = array[i];
    }
  }
  console.log(`Eng katta ikkinchi element: ${second}`);
}

secondLargest([5, 1, 3, 4, 2]);
