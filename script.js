let link1 = "https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg";
let link2 = "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg";
let link3 = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg";

let mostPopularPhotos = [link1, link2, link3];
let photos = [];
let debounce = false;

$("button.submit").click(function() {
    if (debounce === false) {
        debounce = true;

        // Decoration: 
        $("button.submit").text("Uploading");
        setTimeout(() => {
            $("button.submit").text("Uploading .");
        }, 750);
        setTimeout(() => {
            $("button.submit").text("Uploading ..");
        }, 1500);
        setTimeout(() => {
            $("button.submit").text("Uploading ...");
        }, 2250);

        // User Input: 
        var inputValue = $("input.inputArea").val();
        if (inputValue !== "") {

            $("p.sample").remove();
            $("img.sample").remove();
            $("div.posts").children().remove();

            photos.push(inputValue);
            let number = photos.length;
            console.log(number);
            $("p.ap1").text("Total Images: " + number);

            // Tiers
            let tier1 = "Bronze Tier";
            let tier2 = "Silver Tier";
            let tier3 = "Gold Tier";
            let tier4 = "Platinum Tier";
            let tier5 = "Diamond Tier";
            let tier6 = "Nightmare Tier";
            
            if (number === 1) {
                $("p.ap2").text("User Tier: " + tier1);

                let tierNotif = $("p.tierNotif-msg").text("Congratulations! You've achieved the " + tier1 + "!");
                tierNotif.fadeIn();

                setTimeout(() => {
                    tierNotif.fadeOut();
                }, 3000);
            } else if (number === 3) {
                $("p.ap2").text("User Tier: " + tier2);

                let tierNotif = $("p.tierNotif-msg").text("Congratulations! You've achieved the " + tier2 + "!");
                tierNotif.fadeIn();

                setTimeout(() => {
                    tierNotif.fadeOut();
                }, 3000);
            } else if (number === 5) {
                $("p.ap2").text("User Tier: " + tier3);

                let tierNotif = $("p.tierNotif-msg").text("Congratulations! You've achieved the " + tier3 + "!");
                tierNotif.fadeIn();

                setTimeout(() => {
                    tierNotif.fadeOut();
                }, 3000);
            } else if (number === 10) {
                $("p.ap2").text("User Tier: " + tier4);

                let tierNotif = $("p.tierNotif-msg").text("Congratulations! You've achieved the " + tier4 + "!");
                tierNotif.fadeIn();

                setTimeout(() => {
                    tierNotif.fadeOut();
                }, 3000);
            } else if (number === 20) {
                $("p.ap2").text("User Tier: " + tier5);

                let tierNotif = $("p.tierNotif-msg").text("Congratulations! You've achieved the " + tier5 + "!");
                tierNotif.fadeIn();

                setTimeout(() => {
                    tierNotif.fadeOut();
                }, 3000);
            } else if (number === 50) {
                $("p.ap2").text("User Tier: " + tier6);

                let tierNotif = $("p.tierNotif-msg").text("Congratulations! You've achieved the maximum tier of " + tier6 + "!");
                tierNotif.fadeIn();

                setTimeout(() => {
                    tierNotif.fadeOut();
                }, 3000);
            }

            let notif = $("p.notif-msg").text("You've uploaded a total of " + number + " photos!");
            notif.fadeIn();

            setTimeout(() => {
                notif.fadeOut();
                debounce = false;
                $("button.submit").text("Add Photo!");
            }, 3000);
        } else {
            alert("Please enter a valid link!");
            setTimeout(() => {
                $("button.submit").text("Add Photo!");
            }, 3100);
        }

        // Appending Photos:
        for (let imageValue of photos) {
            console.log(imageValue);
            $("div.posts").append("<img src=" + imageValue + ">");
        }

    } else {
        alert("Please wait while your image is being added.");
    }
});

// Liked Photos: 
$("div.liked-photo").append("<img src=" + mostPopularPhotos[2] + ">");