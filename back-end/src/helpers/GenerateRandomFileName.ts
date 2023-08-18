function GenerateRandomFileName(fileName: string) {
    const fileExtension = fileName.split('.')[1]
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const encodedLength = 16
    let result = '';

    let counter = 0;
    while (counter < encodedLength) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return `${result}.${fileExtension}`;
}

export default GenerateRandomFileName