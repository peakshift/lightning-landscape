import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";
import "@szhsin/react-menu/dist/index.css";
import { PAGES_ROUTES } from "src/utils/routing";
import Search from "./Search";
import { IoClose, IoSearch } from "react-icons/io5";
import IconButton from "../IconButton/IconButton";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  cta?: ReactNode;
}

export default function NavDesktop(props: Props) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="py-12 w-full min-w-full relative">
      <div className="content-container">
        <div className="flex gap-16 md:gap-24 lg:gap-64 items-center text-body5 md:text-body4">
          <Link to="/">
            <h2 className="hover:text-primary-500 flex items-center gap-16">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_442_8615)">
                  <path
                    d="M24.9717 12.6974C25.2787 10.3395 22.3381 9.01855 20.7794 10.8142L9.44902 23.8668C8.10026 25.4206 9.20391 27.84 11.2614 27.84H21.2672C22.7158 27.84 23.8342 29.1135 23.6472 30.5499L23.0283 35.3027C22.7213 37.6606 25.6619 38.9816 27.2206 37.1859L38.551 24.1333C39.8997 22.5795 38.7961 20.16 36.7386 20.16H26.7328C25.2842 20.16 24.1658 18.8866 24.3528 17.4502L24.9717 12.6974Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M-5.39896 26.8246C-2.23922 26.5087 0.166206 23.645 0.614089 20.6218C0.751822 19.6921 1.3424 17.9759 2.25401 17.5318C3.66873 16.8425 5.21896 16.7209 6.52844 15.7628C7.55123 15.0144 7.97953 13.7434 8.60111 12.6879C9.82811 10.6043 10.8513 8.48825 13.202 7.54798C16.4146 6.26292 16.7531 2.60341 17.2031 -0.446641C17.5223 -2.61034 17.5811 -4.26988 18.9873 -6.11044C20.0198 -7.46196 21.4018 -9.59032 23.2389 -9.80027C24.9942 -10.0009 26.7714 -10.1428 28.5383 -10.1495C29.5413 -10.1533 29.9807 -10.0889 30.6641 -9.40547C31.7428 -8.32684 32.5926 -7.21883 32.5926 -5.63973C32.5926 -3.97226 29.2472 -5.01281 28.9331 -3.3165C28.787 -2.52731 28.8851 -1.80563 29.2444 -1.11476C29.6645 -0.306843 30.2577 0.208221 30.2693 1.16291C30.2954 3.29922 29.6723 5.1581 29.3431 7.20632C29.2142 8.00799 29.0509 8.93776 29.252 9.74213C29.4287 10.4489 30.0777 11.0885 30.5427 11.625C31.2149 12.4006 32.4284 12.5005 33.3822 12.5816C33.8908 12.6249 34.8509 12.4153 35.3182 12.6879C35.8449 12.9952 35.9985 14.1009 36.2824 14.6012C36.661 15.2682 38.5149 14.9352 39.1598 14.9352C41.1647 14.9352 43.2541 15.4673 45.2108 15.8615C46.3564 16.0922 47.6117 16.5335 48.3085 17.5469C49.5349 19.3308 49.266 21.9032 47.7467 23.4917C47.0103 24.2615 45.923 24.6444 45.3095 25.534C44.8547 26.1936 44.811 26.9524 44.4516 27.6446C43.4706 29.534 41.7851 29.905 39.9722 30.5448C37.3976 31.4535 35.4578 32.4342 34.9386 35.29C34.7813 36.1547 34.8498 37.0555 34.6425 37.9093C34.3838 38.9744 33.3952 39.688 32.6533 40.4299C31.7793 41.3039 30.7775 42.0933 29.7227 42.738C28.6978 43.3643 22.9544 44.036 22.2 45C21.0087 46.5222 26.8602 50.2516 24.7422 50.9679C22.8407 51.6111 20.662 52.2061 18.6305 52.0992C17.4031 52.0346 16.646 51.447 15.8137 50.5731C14.7794 49.4871 17.4 47.1318 17.4 45.6C17.4 43.9894 14.5184 43.1887 14.8267 41.6143C15.0725 40.3596 15.651 39.1438 15.753 37.8637C15.8527 36.612 15.3163 35.929 14.8267 34.88C14.465 34.1048 14.2587 33.0513 13.3387 32.777C12.1921 32.435 11.1064 32.5447 10.0133 32.9819C8.91895 33.4197 7.83278 33.6838 6.6575 33.6576C5.88796 33.6405 5.51287 32.8991 4.84296 32.6479C3.85664 32.278 2.55719 32.6856 1.54034 32.701C0.574046 32.7157 -0.393451 32.701 -1.35989 32.701C-1.97697 32.701 -2.54225 32.3737 -3.13647 32.2303C-4.25357 31.9607 -5.28759 32.5278 -6.38595 32.5644C-6.84849 32.5798 -7.07967 32.3573 -7.03129 31.8735C-6.96633 31.2239 -6.86089 31.0788 -6.32521 30.7574C-5.23922 30.1058 -4.98898 29.4214 -4.98898 28.1912C-4.98898 27.6114 -5.36533 27.1988 -5.53562 26.688"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-4.42197 16.9638C-5.42268 18.2981 -5.71046 20.2105 -5.79553 21.8268V21.8388C-5.79552 22.5217 -5.79551 22.6857 -6.23813 23.2289C-6.78864 23.9045 -7.07156 24.673 -7.94607 24.8514C-9.26248 25.1201 -10.4157 25.0484 -10.4157 26.669C-10.4157 27.8803 -10.3233 29.0545 -10.4781 30.2625C-10.5838 31.0866 -10.633 32.0587 -10.5128 32.8847C-10.2113 34.9577 -8.41782 36.8066 -6.53088 37.6714C-5.10244 38.3261 -3.54689 38.2048 -2.04944 37.935C-1.17448 37.7774 -0.299282 37.4057 0.586699 37.3384C1.06279 37.3023 1.44549 37.7883 1.80071 38.0391C2.39651 38.4596 2.91696 39.3258 3.68069 39.4057C4.97267 39.5409 6.27475 39.0037 7.56553 38.9895C8.41589 38.9801 9.279 39.1228 9.4247 40.1064C9.58702 41.202 9.31371 42.4469 9.31371 43.5542C9.31371 46.5045 8.8961 49.8082 9.82012 52.6419C10.4814 54.6699 11.7701 55.546 13.7535 56.2631C15.9668 57.0634 18.0821 57.7039 20.4618 57.7754C22.5624 57.8386 25.2258 58.0169 27.184 57.0817C29.2639 56.0883 31.3247 54.186 32.6435 52.302C33.2915 51.3764 33.8616 49.7399 33.9131 48.5906C33.9657 47.4158 33.9252 46.6952 34.9189 45.9891C36.5879 44.8033 39.0419 43.9498 39.8374 41.8615C40.237 40.8126 40.7401 39.743 40.9751 38.6426C41.0583 38.2532 41.0912 37.8782 41.2179 37.498C41.5079 36.628 42.3097 35.9009 42.9037 35.2156C43.5665 34.4508 44.3071 33.8376 44.9016 33.0096C45.4896 32.1907 46.0159 31.5429 47.0383 31.3239C48.5108 31.0083 49.5346 30.6599 50.6456 29.5687C51.4362 28.7922 52.0645 27.8636 52.7684 27.0089C54.6825 24.6846 55.8745 21.3405 55.3352 18.275C55.0501 16.6549 54.0995 14.7189 53.1291 13.3981C52.695 12.8072 52.2073 12.0914 51.6446 11.6152C51.1993 11.2385 50.396 11.1918 49.8548 11.1158C47.8127 10.8288 45.7279 10.9324 43.7292 10.3804C42.3621 10.0028 40.9397 9.2198 39.8097 8.34089C38.9705 7.68819 37.7966 7.79704 36.8059 7.4668C35.892 7.16219 34.7183 6.2331 34.135 5.46888C33.6882 4.88332 33.6239 4.1218 33.7257 3.40853C33.8014 2.87918 33.6671 2.11198 33.9894 1.64648C34.8891 0.34691 36.4104 0.279806 36.4104 -1.52382C36.4104 -2.17568 36.1164 -2.67669 36.0081 -3.29975C35.9031 -3.90339 36.1942 -4.34734 36.5132 -4.83388L36.5353 -4.86756C36.8253 -5.31022 37.1637 -5.772 37.34 -6.27581C37.6816 -7.25179 37.3301 -8.2007 37.2152 -9.19638C36.9345 -11.6291 36.6012 -13.5684 34.0379 -14.5242C30.7472 -15.7512 27.1253 -15.9446 23.6599 -15.752C20.4801 -15.5754 17.9447 -15.2606 15.7029 -13.0188C15.1471 -12.463 14.7609 -11.7333 14.3779 -11.0556C13.3956 -9.31776 12.6237 -7.68924 12.2481 -5.72777C11.9944 -4.40268 12.0442 -3.00708 11.6307 -1.71807C11.1655 -0.267725 10.729 1.35109 10.0629 2.72175C9.56072 3.75513 9.03542 4.48748 8.18988 5.28851C7.31015 6.12195 6.10735 6.93636 5.51212 8.02177C5.12694 8.72416 4.96174 9.55264 4.59641 10.2833C3.55834 12.3594 1.85078 13.2415 -0.197206 14.2167C-1.8701 15.0133 -3.29124 15.4562 -4.42197 16.9638Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-15.1037 20.5165C-14.1577 18.1121 -9.08533 16.2171 -9.83828 13.6289C-10.3484 11.8752 -11.0229 11.254 -11.0028 9.42887C-10.9789 7.25204 -9.19185 7.66534 -6.83828 8.22887C-3.93733 8.92347 -2.49042 10.8532 0.158357 7.26262C0.922713 6.22649 1.82831 3.70156 1.82831 2.35847C1.82831 0.858838 0.631943 -0.830911 1.49009 -2.31316C1.607 -2.5151 1.8635 -2.60947 2.01855 -2.77821C2.47437 -3.27425 2.65468 -4.03027 2.99093 -4.6067C4.13894 -6.57472 5.39252 -8.48268 6.54221 -10.4515C7.56419 -12.2017 8.22517 -13.9733 8.60322 -15.9476C8.95724 -17.7963 14.3927 -19.4089 15.9617 -20.5711C19.9582 -23.5315 20.1171 -23.8795 24.8905 -23.494C26.3526 -23.376 27.7301 -23.0886 29.1394 -22.7119C30.4056 -22.3734 31.6229 -22.5954 32.902 -22.807C34.6776 -23.1008 34.564 -21.645 36.3617 -21.7711C37.2716 -21.835 39.183 -19.7271 39.9617 -19.3509C41.2394 -18.7335 43.4169 -19.8323 43.6827 -18.1711C43.8503 -17.1237 44.8837 -16.9567 44.7819 -15.9053C44.4915 -12.9043 44.1327 -9.83913 43.6827 -6.85796C43.3366 -4.56509 42.6879 0.209467 44.7819 1.02887C45.9375 1.48104 47.5077 1.40689 48.3617 2.35847C49.4057 3.52176 51.3681 3.62887 52.5617 4.652C53.5041 5.45974 54.9509 4.12087 56.0594 4.652C58.6552 5.89583 60.0499 8.56079 61.2066 11.0887C62.7101 14.3747 61.1567 18.1954 61.8619 21.7214C62.141 23.1167 62.7074 24.5305 62.7074 25.9703C62.7074 28.293 58.3533 29.3448 57.9617 31.6289C57.6015 33.7302 58.2621 34.9285 56.7617 36.4289C55.5686 37.622 52.6803 35.99 51.3617 37.0289C49.5141 38.4846 49.961 41.4198 47.7617 42.4289C46.1449 43.1707 46.0198 45.8399 44.7079 47.0877C43.5914 48.1498 42.6416 49.0218 42.1607 50.491C41.7762 51.6659 41.2706 52.5739 40.6493 53.6301C38.9122 56.5833 36.8142 59.2528 33.8955 61.1237C32.5242 62.0028 31.3368 63.1645 29.9426 63.9986C27.6816 65.3514 24.601 66.1286 22.0051 66.345C18.0619 66.6736 16.7086 64.5593 12.9617 63.1319C11.5855 62.6076 7.9931 64.4157 7.19751 63.1319C6.65645 62.2588 6.21581 61.3103 5.90805 60.331C5.31121 58.432 4.23635 57.6842 2.90637 56.3253C2.38005 55.7875 2.54653 54.6936 2.68442 54.0317C3.30346 51.0603 4.20344 47.4897 1.49009 47.0877C-0.184137 46.8397 -4.10407 45.6296 -5.63828 46.0289C-6.72756 46.3124 -9.46151 50.0147 -10.5166 49.5926C-13.0588 48.5758 -11.6076 45.9471 -11.0028 43.6289C-10.0183 39.855 -14.2648 36.3361 -15.981 33.2102C-17.0864 31.1968 -16.0572 28.5353 -15.4948 26.5199C-14.9317 24.5023 -15.1037 22.4 -15.1037 20.3263"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-20.9151 15.916C-20.7774 15.2961 -17.9129 14.7436 -17.5225 14.229C-16.6049 13.0194 -16.6204 12.7588 -16.4383 11.229C-16.1994 9.22238 -16.7107 6.62687 -16.4383 4.62901C-15.9754 1.23419 -11.8702 1.56263 -9.54842 1.56263C-8.23784 1.56263 -5.6934 2.12813 -4.98144 0.837716C-4.10992 -0.741913 -4.30581 -2.58102 -3.6331 -4.17871C-3.12445 -5.38675 -2.84602 -6.65176 -2.25575 -7.83229C-1.49607 -9.35167 -0.453701 -10.7115 0.31045 -12.2398C1.07769 -13.7743 1.18173 -15.677 1.78928 -17.2852C2.86538 -20.1337 3.90843 -21.9227 6.64622 -23.7805C7.59604 -24.425 8.84102 -24.3201 9.76337 -24.9983C10.7997 -25.7604 11.5601 -26.7521 12.75 -27.347C14.171 -28.0575 15.9904 -28.5781 17.52 -29.1013C19.667 -29.8359 22.1292 -29.0205 24.3617 -28.9709C26.1491 -28.9312 27.2522 -29.7167 29.0317 -29.5073C32.4168 -29.109 35.7484 -28.9709 39.1805 -28.9709C39.9497 -28.9709 41.1893 -27.7134 41.7617 -27.347C43.051 -26.5219 44.3674 -27.597 45.4728 -26.4916C47.3888 -24.5757 50.5907 -22.2771 50.5907 -19.199C50.5907 -17.4877 50.1261 -15.9632 50.0687 -14.2985C50.0307 -13.1944 49.4117 -11.7851 49.9528 -10.703C50.3087 -9.99116 51.1067 -9.696 51.6346 -9.13714C52.2186 -8.51871 52.1565 -6.62875 52.1565 -5.80252C52.1565 -4.48243 52.3814 -1.56901 54.1283 -1.56901C55.4338 -1.56901 56.884 -1.23579 58.1008 -0.786098C61.9433 0.633959 68.0757 2.59912 68.0757 7.69543C68.0757 8.97568 67.6165 10.2235 67.5537 11.4795C67.428 13.9944 67.7655 15.3472 68.0757 17.829C68.2436 19.1723 67.8147 21.8479 67.8147 23.2231C67.8147 24.6434 68.3454 28.6623 67.5537 29.829C65.4714 32.8976 64.5526 33.4574 64.4221 37.1125C64.3225 39.9022 59.3436 41.5963 57.2309 42.274C55.2638 42.9049 53.8986 42.7117 52.432 44.3617C51.6351 45.2582 50.6874 46.7313 50.3877 47.8703C49.9448 49.5532 49.2246 50.9545 48.6334 52.5968C48.0827 54.1265 45.969 55.6216 44.7617 56.8289C43.0656 58.525 44.0349 61.751 42.1237 63.2096C40.4681 64.473 38.6283 65.3051 36.7448 66.1527C35.0758 66.9038 33.5132 67.7359 31.9458 68.6899C29.7943 69.9996 26.8382 70.5751 24.3617 70.6289C22.337 70.673 20.399 71.9156 18.3617 71.8289C15.556 71.7096 13.2074 68.7304 10.4013 68.6319C7.51855 68.5308 5.78966 69.5007 3.48559 67.1966C2.64858 66.3596 2.03031 65.4054 1.32534 64.4564C0.758542 63.6934 -0.234527 62.8562 -0.55945 61.9627C-1.33161 59.8392 -1.97375 57.6417 -2.64721 55.4529C-3.12528 53.8992 -3.25451 51.9982 -4.98144 52.029C-7.08801 52.0666 -8.6918 55.0736 -10.4763 55.5834C-13.6314 56.4849 -15.3087 54.6068 -15.8383 51.429C-16.1212 49.7316 -17.5225 48.3969 -17.5225 46.6815C-17.5225 45.1137 -15.4294 43.3624 -15.8383 41.829C-16.3455 39.927 -18.3653 37.6903 -18.5809 35.7497C-18.7494 34.2332 -19.4779 32.8034 -19.5958 31.2117C-19.6968 29.848 -19.4507 28.4359 -19.6103 27.0797C-19.7599 25.8077 -20.7728 24.777 -20.9006 23.4986C-20.951 22.9951 -20.8325 22.5032 -21.0456 22.0343C-21.7523 20.4795 -20.9151 17.846 -20.9151 16.177"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-23.3262 -1.05729C-25.9799 0.950924 -21.8136 5.28777 -24.9886 7.02888C-25.4689 7.74937 -27.9353 8.12725 -28.2864 8.91736C-28.8134 10.1031 -28.3405 11.1709 -28.3405 12.3774C-28.3405 14.3159 -28.0454 16.2446 -28.0972 18.1622C-28.1289 19.3349 -28.8 20.3769 -28.8 21.5681C-28.8 23.2458 -28.3874 24.7573 -27.7188 26.2716C-25.915 30.3566 -24.6652 33.8675 -24.9886 38.4358C-25.2059 41.5059 -26.4385 44.741 -26.0969 47.8158C-25.5974 52.3116 -23.9991 57.4454 -20.1229 60.1963C-17.2206 62.2559 -13.6076 61.5722 -10.4997 62.9805C-6.21177 64.9235 -6.69933 68.6865 -4.98523 72.4956C-4.37071 73.8612 -3.20258 75.335 -2.05231 76.2936C-0.458752 77.6215 1.43537 77.5235 3.39455 77.5235C4.63307 77.5235 7.19081 77.0134 8.26024 77.8884C10.1798 79.459 13.059 79.3934 15.4236 79.4968C20.0643 79.6997 25.4704 79.1064 29.8314 77.3748C32.4946 76.3174 34.9835 74.8797 37.6436 73.8202C40.0424 72.8647 42.428 71.8241 44.6312 70.4682C46.6554 69.2226 48.9592 68.2332 50.862 66.819C52.841 65.3481 54.3215 63.0357 56.025 61.264C57.5438 59.6845 58.2579 58.1912 59.0796 56.1956C60.0685 53.794 61.1879 51.1976 63.2695 49.5323C64.3215 48.6907 65.4774 48.0601 66.5403 47.2481C70.5427 44.1907 72.6921 40.1049 74.5687 35.584C75.4112 33.5544 76.2717 31.8485 76.2717 29.5965C76.2717 27.1861 75.9577 24.8566 76.15 22.4331C76.4821 18.2491 77.5207 14.1047 77.1096 9.87698C76.614 4.77835 75.527 0.510681 71.6222 -3.00357C68.3364 -5.96087 63.666 -7.50406 61.4989 -11.4915C60.4779 -13.3702 60.7587 -14.5595 60.4041 -16.4653C60.2646 -17.2151 59.4198 -17.756 58.8633 -18.1953C58.1242 -18.7789 57.1425 -19.1355 56.863 -20.1416C56.5035 -21.4357 56.605 -22.7948 56.444 -24.1152C56.0558 -27.299 56.8706 -30.7472 54.7005 -33.4411C52.8234 -35.7713 50.8274 -37.322 47.8209 -37.6716C44.506 -38.057 41.0874 -38.064 37.7517 -38.2257C31.7132 -38.5185 25.4988 -38.5094 19.5054 -37.6716C16.9796 -37.3185 14.7566 -36.3466 12.342 -35.6036C10.9048 -35.1614 9.70667 -34.0832 8.36837 -33.4141L8.27267 -33.3662C5.01409 -31.7371 1.55576 -30.0081 -0.727762 -27.0617C-2.81325 -24.3707 -4.28596 -21.9598 -5.45829 -18.7359C-6.76595 -15.1399 -7.69109 -11.6609 -9.39138 -8.20714C-11.0998 -4.73682 -13.3415 -3.34445 -17.0008 -2.65215C-19.4064 -2.19704 -21.1501 -2.704 -23.3262 -1.05729Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </g>
                <rect
                  x="0.7"
                  y="0.7"
                  width="46.6"
                  height="46.6"
                  rx="23.3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <defs>
                  <clipPath id="clip0_442_8615">
                    <rect width="48" height="48" rx="24" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>

              <span className="hidden sm:inline text-body3 md:text-body2 font-extrabold">
                Lightning Landscape
              </span>
            </h2>
          </Link>
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className="absolute inset-0 bg-white z-10 p-12 content-container"
              >
                <div className=" flex justify-end items-center gap-12">
                  <Search />{" "}
                  <IconButton
                    onClick={() => setTimeout(() => setShowSearch(false), 109)}
                  >
                    <IoClose className="scale-150" />
                  </IconButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <ul className="ml-auto">
            <li>
              <Link to={PAGES_ROUTES.about.default} className="font-bolder">
                About
              </Link>
            </li>
          </ul>
          {props.cta}
          <IconButton onClick={() => setShowSearch(true)}>
            <IoSearch className="scale-125" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
