const uploadImage = async (firebase, ref, file ) => {
    const storage = firebase.storage();
    const date = JSON.stringify(new Date());
    const name = `${file.name}+${date}`;
    try {
      const newRef = storage.ref(ref).child(name);
      await newRef.put(file);
      let urlImagen = await newRef.getDownloadURL();
      const ImageInfo = {
        url: urlImagen,
        title: name,
        direction: `${ref}/${file.name}`,
      };
      console.log(ImageInfo);
      return { urlImagen, ImageName: name };
    } catch (error) {
      console.log(error);
    }
};
export {uploadImage};