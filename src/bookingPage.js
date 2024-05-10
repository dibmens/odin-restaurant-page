export default function showBookingPage(contentDiv){
    let div = document.createElement(`div`);
    div.className = "home-wrapper";
    div.innerHTML =
    `<h3>DARE TO EXCEED THE EXCESS</h3>
     <h2>O'NEAL'S<br>
     Royal Venue<br>
     THE LINE, Neom<br>
     Saudi Arabia<br>
     +966 666 666 669</h2>
     <p>We are fully booked 5 years ahead. Inquire to become a bidder
     in our monthly auction for new openings. All reservations are
     fully paid in advance and non-refundable. <span>Your anonymity is guaranteed.</span>
     </p>`;
    contentDiv.append(div);
    }