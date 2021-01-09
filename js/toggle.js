var toggleMenuBar = () => {

    let navigation = document.querySelector('.navigation');
    let toggleMenu = document.querySelector('.toggleMenu');
    navigation.classList.toggle('active')
    toggleMenu.classList.toggle('active');
}