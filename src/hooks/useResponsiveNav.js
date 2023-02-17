import { useEffect } from 'react';

function useResponsiveNav() {
  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    const navigationItems = document.querySelectorAll(".navigation a");

    function handleClick() {
      menuBtn.classList.toggle('active');
      navigation.classList.toggle('active');
    }

    function handleItemClick() {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    }

    menuBtn.addEventListener('click', handleClick);

    navigationItems.forEach((navigationItem) => {
      navigationItem.addEventListener("click", handleItemClick);
    });

    return () => {
      menuBtn.removeEventListener('click', handleClick);

      navigationItems.forEach((navigationItem) => {
        navigationItem.removeEventListener("click", handleItemClick);
      });
    };
  }, []);
}

export default useResponsiveNav;
