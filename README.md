# React + Vite
<!-- // const location = useLocation();
  // const [applyMargin, setApplyMargin] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the current location includes the hash of this section
  //     if (
  //       location.hash === "#timeline" ||
  //       location.hash === "#overview" ||
  //       location.hash === "#faq"
  //     ) {
  //       setApplyMargin(true);
  //     } else {
  //       setApplyMargin(false);
  //     }
  //   };

  //   // Add an event listener for scroll
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function: Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [location]); -->

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
