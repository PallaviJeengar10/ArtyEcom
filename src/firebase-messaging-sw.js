importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js");

firebase.initializeApp(
    {
        apiKey: 'AIzaSyDEHaoD6qx0zRM5cpHol7GusQ7mjr3-73A',
        authDomain: 'fcm-pts.firebaseapp.com',
        projectId: 'fcm-pts',
        storageBucket: 'fcm-pts.appspot.com',
        messagingSenderId: '385560715477',
        appId: '1:385560715477:web:bdef833697a9072dc2425c',
        measurementId: 'G-CLDF5YF36G',});

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log(
//         "[firebase-messaging-sw.js] Received background message ",
//         payload,
//     );
//     const notificationTitle = "Background Message Title";
//     const notificationOptions = {
//         body: "Background Message body.",
//         icon: "/itwonders-web-logo.png",
//     };

//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions,
//     );
// });
