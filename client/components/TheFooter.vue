<template>
    <div class="footerContainer">
        <div class="footerContent">
            <div class="infoArea">
                <div class="rowOne">
                    <span class="brandHeader">Sawmar Shop</span>
                    <p class="infoText">Sawmar Corp.</p>
                    <span class="phoneText">Phone : +90 123 12 12</span><br>
                    <span>info@sawmar.com</span><br>
                    <img class="imgSocialMeadia"
                        src="https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png"
                        alt="logo instagram free transparent @transparentpng.com">
                    <img class="imgSocialMeadia"
                        src="https://www.transparentpng.com/thumb/facebook-logo/facebook-icon-transparent-background-20.png"
                        alt="facebook icon transparent background @transparentpng.com">
                    <img class="imgSocialMeadia"
                        src="https://www.transparentpng.com/thumb/twitter/twitter-bird-logo-pictures-0.png"
                        alt="twitter bird logo pictures @transparentpng.com">
                </div>
                <div class="rowTwo">
                    <h3>Usefull Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Online Support Service</li>
                        <li>Create Ticket</li>
                    </ul>
                </div>
                <div class="rowThree">
                    <h4>Help</h4>
                    <div>
                        <h4>Payment</h4>
                    </div>
                </div>
            </div>

            <div class="bottomArea">
                <div>
                    <span class="bottomAreaText">Terms and Conditions</span>
                    <span class="bottomAreaText">Privacy Policy</span>
                </div>
                <span class="copyrightText">©2022 All Right Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footerContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    left: 0;
    bottom: 0;
    background-color: #333c35;
    height: auto;
    color: white;
}

.footerContent {
    width: 80%;
}

.infoArea {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80%;
}

.rowOne {
    width: 30%;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.brandHeader {
    font-size: 22px;
    font-weight: 700;
}

.imgSocialMeadia {
    width: 60px;
    height: 60px;
}

.rowTwo {
    width: 40%;
    padding: 20px;

}

.rowThree {
    width: 30%;
    padding: 20px;

}

.bottomArea {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bottomAreaText {
    padding: 30px;
}

.copyrightText {
    margin-top: 15px;
}
</style>