import img1 from '../assets/bannerImage1.jpg'
import img2 from '../assets/bannerImage2.jpg'
import img3 from '../assets/bannerImage3.jpg'
import img4 from '../assets/bannerImage4.jpg'
import img5 from '../assets/bannerImage5.jpg'
import img6 from '../assets/bannerImage6.jpg'
import { isNextPageAvailable } from '../ReduxStore/paginationSlice';
import { updateToInitialPage } from '../ReduxStore/paginationSlice.js'

const imgData = [
    {
        img: img1,
        title: null,
        text: null,
        action: null,
    },
    {
        img: img6,
        title: 'Moments Captured. Stories Preserved.',
        text: 'Professional event photography that turns memories into timeless visuals.',
        action: 'Book a Photographer',
    },
    {
        img: img2,
        title: 'Sound That Brings Events to Life.',
        text: 'Live music, DJs, and professional sound systems for every occasion.',
        action: 'Book Music & Sound',
    },
    {
        img: img4,
        title: 'Spaces That Make Events Legendary.',
        text: 'Premium venues for conferences, weddings, parties, and celebrations.',
        action: 'Book a Venue',
    },
    {
        img: img3,
        title: null,
        text: null,
        action: null,
    },
    {
        img: img5,
        title: null,
        text: null,
        action: null,
    }
]

async function fetchData(url) {
  console.log('url' , url)
    let response = await fetch(url)
    let jsonData = await response.json()
    return jsonData.ads
}

function redirectchat(loggedInUser, navigate) {
    if (!loggedInUser) {
        navigate('/user-login');
        return;
    }
    navigate('/chat')

}

function redirectHome(navigate) {
    console.log('clicked')
    navigate('/')
}

function redirectPostAd(loggedInUser, navigate) {
    if (!loggedInUser) navigate('/user-login');
    if (loggedInUser.accountType == 'user') navigate('/seller-signup')
    else navigate('/postAdvertisement')
}

function redirectLogout(loggedInUser, navigate) {
    if (!loggedInUser) navigate('user-login');
    fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/${loggedInUser.accountType}/logout`, {
        method: 'GET',
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status == 200) navigate(`/${loggedInUser.accountType}-login`)
            else navigate(`/${loggedInUser.accountType}-login`)
        })
}

function redirectProfile(loggedInUser, navigate) {
    if (!loggedInUser) {
        navigate('/user-login');
        return;
    }
    navigate('/profile-feed')
}

async function getRecentAdvertisements(recentsFeaturedAds , addRecentAdsData , dispatch , page) {
  try {
    const limit = 12;
      const response = await fetchData(`${import.meta.env.VITE_SERVER_SIDE_URL}/ad/recentAds/${(page - 1) * limit}/${limit + 1}`);
       dispatch(addRecentAdsData({page : page ,advertisementArray : response }));
      if(response.length < limit) dispatch(isNextPageAvailable(false));
  } catch (error) {
    console.log('could not fetch advertisement' , error);
  }
  }

  async function getSearchedAdvertisements(serviceType , location , page , searchedAds , addSearchedAdsData , isNextPageAvailable , dispatch) {
    try {
      const limit = 12;
      const response = await fetchData(`${import.meta.env.VITE_SERVER_SIDE_URL}/ad/${serviceType}/${location}/${(page - 1) * limit}/${limit + 1}`)
      console.log('searched ', response)
      if(searchedAds && searchedAds[0].city.toLowerCase()==location.toLowerCase()) {
        dispatch(addSearchedAdsData({page:page , advertisementArray : response}));
        return;
      }  
          dispatch(updateToInitialPage());
         dispatch(addSearchedAdsData({page:1 , advertisementArray : response}));
      if (response.length < limit) dispatch(isNextPageAvailable(false));
    } catch (error) {
      console.log('could not fetch advertisements', error)
    }
  }

function redirectChat(loggedInUserId , ad , navigate , dispatch , addReceiver , addChatId) {
    if (!loggedInUserId) {
      navigate('/user-login');
      return;
    }
    // fetching chatId
    fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/api/chat/find/${loggedInUserId}/${ad.sellerId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(addChatId(data.chat._id))
        }
      })

    dispatch(
      addReceiver(
        {
          receiverId: ad.sellerId,
          receiverName: ad.sellerUserame,
        }
      )
    )
    console.log({
      sellerId: ad.sellerId,
      sellerName: ad.sellerUsername,
    })
    navigate('/chat')
  }
 
async function handleDeleteAd(ad , navigate) {
    let response = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/ad/delete-ad/${ad._id}`, {
      method: 'GET',
      credentials: 'include',
    })
    let res = await response.json()
    if (res.status == 200) navigate('/profile-feed/my-advertisements')

  }

  function handleDescription(advertisement , dispatch , navigate , addAd) {
    dispatch(addAd(advertisement))
    navigate(`/adDescription/${advertisement?._id}`);
    }

export {
    fetchData,
    redirectHome,
    redirectchat,
    redirectLogout,
    redirectPostAd,
    redirectProfile,
    imgData,
    getRecentAdvertisements,
    getSearchedAdvertisements,
    redirectChat,
    handleDescription,
    handleDeleteAd,
}