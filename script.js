            //ScrollTrigger Animation
            gsap.from(".section", {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section",
                    start: "top 80%",
                }
            });