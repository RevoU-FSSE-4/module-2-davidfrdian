# Spider Club

[Here](https://spiderclub.vercel.app/) is our website before custom domain,
and [click here](https://spiderclub.site/) to see our website after use custom domain!🕸️🕷️

## Table of Contents
- [Introduction](#introduction)
- [Deployment](#deployment)
- [Author](#author)

## Introduction
Spider Club website serves as a portal into the heart of our community. Here, enthusiasts of all ages and backgrounds unite under the common love for the iconic web-slinger. 

Our platform is more than just a gathering of fans; it's a celebration of Spider-Man's enduring legacy and the impact he has had on countless lives.

## Deployment
### Vercel Sign up & Connect with Github
1. First, open [Vercel](https://vercel.com) and login with Github
	![Open Vercel and Login](./images/deployment/day1-1.png)

2. Now, you already login to Vercel
	![You Already enter to Vercel](./images/deployment/day1-2.png)

### Deployment on Vercel
1. Click Add New on home page, and choose project
![Click Add New](./images/deployment/day2-1.png)

2. This is page for import your repository from Github
![Page of Import Git Repository](./images/deployment/day2-2.png)

3. Select the repository that you want on here
![Select Repository](./images/deployment/day2-3.png)

4. After that, you can find your project with search bar and click import
![Find your repository and import it](./images/deployment/day2-4.png)

5. Set yout project name and Deploy it
![Setting your project name](./images/deployment/day2-5.png)

6. Congratulations! your project is already deploy with Vercel😄
![your project is already deploy](./images/deployment/day2-6.png)

### Setting Custom Domain with Vercel, Niagahoster, and Cloudflare
1. Click domains button on your project page
![Click domains](./images/deployment/day3-1.png)

2. Write your domain custom name that you already buy on Niagahoster
![write your domain custom name](./images/deployment/day3-2.png)

3. Choose one from the options. In that case, I chose the one recommended by Vercel
![choose one options](./images/deployment/day3-3.png)

4. The domain will invalid configuration because we haven't set that in Cloudflare and Niagahoster
![appearance of domain that invalid](./images/deployment/day3-4.png)

5. Next step, open Cloudflare and login
![open cloudflare and login](./images/deployment/day3-5.png)

6. After stand on the home page, click 'Add site'
![click add site](./images/deployment/day3-6.png)

7. Write your domain custom name and click continue
![write your domain custom name and click continue](./images/deployment/day3-7.png)

8. If you haven't buy the domain, you can visiting [Niagahoster](https://niagahoster.com) first
![visit niagahoster first if you haven't buy the domain](./images/deployment/day3-8.png)

9. Login in here anything you want, and don't forget to buy your domain on domain menu, follow the process until payment
![login niagahoster and buy your domain](./images/deployment/day3-9.png)

10. Back to cloudflare and copy the nameservers
![copy the nameservers on cloudflare](./images/deployment/day3-10.png)

11. Put the nameservers to the Niagahoster and save it.
![put nameservers on Niagahoster](./images/deployment/day3-11.png)

12. Open [Nslookup.io](https://www.nslookup.io/) and put your vercel domain on search bar to find IP for Cloudflare
![open nslookup.io and search IP for Cloudflare](./images/deployment/day3-12.png)

13. Put the IPv4 Adress with Add record feature and save
![put ip adress on cloudflare](./images/deployment/day3-13.png)

14. Back to Vercel to see the results, your domain custom name on Vercel will valid 
![back to vercel and see, your domain will valid](./images/deployment/day3-14.png)

15. Finally, your domain custom name has been applied 🎊🎉
![#](./images/deployment/day3-15.png)






## Author
- LinkedIn : [David Ferdian](https://www.linkedin.com/in/davidferdian)
- Instagram : [David Ferdian](https://www.instagram.com/david_f.h/)

