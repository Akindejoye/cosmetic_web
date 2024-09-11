export const shuffleArray = (array: any) => {
  return array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map(({ value }: any) => value);
}

export const shuffleArrayTwo = (array: any): any => {

  // Loop all elements
    for (let i: any = array.length - 1; i > 0; i--) {
    
    // Pickup a random element
      const j: any = Math.floor(Math.random() * (i + 1));
      const temp: any = array[i];
      
      // Swap it with the current element
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  export const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];