# The Painful First Steps of Linux Gaming (And Why I'd Do It Again)

As an avid gamer, I've always enjoyed jumping into a game during some downtime to cool off or lose myself into a deep narrative. But recently, I've found that more difficult to do. My Switch 2 is fantastic, but outside of Nintendo titles it doesn't always get the latest big games. My go-to for day-to-day tasks, my MacBook Pro, has even less support thanks to publishers not wanting to support MacOS. And lastly, I've used my Xbox Series X less and less since Xbox Game Pass has become less of a deal with the recent price hikes, and never really gave me the level of control I was looking for.

PC gaming has lived on in contrast to that. Which is why I've built many gaming PCs myself over the years. And regardless of the hardware parts I would pick, it has always been running Windows as its OS, mainly because if you wanted to game you just had to run Windows.

Then came Windows 11.

So I finally thought it time to give Linux an honest chance.

---

## Microsoft's Vision for Windows Isn't Mine

My problem with Windows didn't start with one single thing, but rather it was a slow accumulation of frustrations over a long period of time. For everything outside of gaming, I had left it behind a decade and a half ago — but my gaming rig stayed on Windows, because back then, if you wanted to game, that was simply the deal.

Slowly though, even that last reason started to erode. Microsoft's changes to Windows have made my PC feel less and less like it was truly mine, with increased telemetry collection, core features like local search leaning heavily on cloud services, and a perceived lack of quality control on updates that sometimes cause the system to break with no simple resolution other than to reinstall the OS.

The final straw though was Copilot and Microsoft's insistence on it being integrated so deeply into my computer whether I wanted it to be or not. Microsoft's AI strategy has felt so invasive, especially since it was just there one day, with no easy way to opt out or disable it without scouring GitHub for a script that may well be undone by the next Windows update.

This is in contrast to the likes of Apple who explicitly ask you to opt in if you want to use Apple Intelligence. Even Google makes it somewhat easier to disable Gemini if you so choose. With Microsoft it feels more like they're trying to justify a massive investment that no one asked for — not unlike how people were once pushing crypto and NFTs on anyone who would listen.

---

## Why Linux, Why Now

I didn't arrive at Linux overnight. I've been watching what Valve has been trying to do with Linux gaming since the original Steam Machines and the first version of SteamOS, following its evolution all the way through to the Steam Deck. For a long time though, it felt like a promising experiment rather than something ready for a daily gaming setup.

I'd tried alternatives along the way. HoloISO was interesting, but its limited hardware support at the time — particularly for my GeForce RTX 2070 — was a real blocker. On my Mac, tools like Heroic and Crossover gave me some wins, but never the full experience I was looking for, and none of it solved the problem for my more powerful gaming rig.

Ironically, it was Bazzite's rise that made me feel like the time had genuinely come. Seeing a polished, gaming-focused Linux distro gain real momentum was the signal I'd been waiting for. However, even that wasn't without its problems. It wasn't until I reached out to a friend who had already made the switch to Linux that I was pointed to Nobara.

For those that don't know, Nobara is a Fedora-based distro that comes pre-configured with gaming-relevant tweaks out of the box: custom kernel patches, media codecs, and crucially, solid Nvidia GPU support. That last point turned out to be non-negotiable for me as I had an RTX 2070. While maybe not the most beginner-friendly distro, for those who want to game on Linux it removes a lot of the gaming specific setup that other more traditional Linux distros leave to the end user.

---

## Installing Linux on My Gaming Rig

Even though I had made up my mind about moving to Linux, I don't think I was quite prepared for some of the hurdles that came with trying to install Linux onto my PC. For some context, while I've used Linux plenty, most of the time it wasn't the primary OS on hardware I put together myself. It was running as a VM on my computer, in a container running a specific app via Docker, or in the cloud for work.

My original plan was to run Bazzite, swapping out my RTX 2070 for a Radeon RX Vega 64 that I had previously used in an eGPU with an older MacBook. Even though it had been sitting unused for a while I had assumed the Vega 64 was still a good choice considering AMD has better support on Linux than Nvidia. Sadly, it turned out my Vega GPU is probably defective. I also found out a bit later that while Bazzite is great for the new crop of handheld PCs coming out, its broader hardware support can be a bit hit or miss for desktop PCs. That's the point where my friend pointed me to Nobara.

That still left the question of which flavour of Nobara I wanted, however...

You see, just as there are multiple flavours of Linux, many distros have different flavours of their own depending on which desktop environment you want. GNOME and KDE are common DEs that can be found across multiple distros; additionally, the Nobara devs have made a custom version of KDE along with a more console-like HTPC DE that was close to the Steam Deck experience.

At first the idea of the HTPC version sounded great, but after I installed it I found it plagued with slowdowns in the interface and weird artifacts as I tried to scroll through Steam. I switched to the official, custom KDE version instead, installing it over the previous. That made the system run a lot smoother so I stuck with that and having Steam just launch in Big Picture mode on startup.

I do think I initially messed up my bootloader because I installed over the HTPC install, and my BIOS wouldn't pick up the OS automatically, but I resolved that at a later date by wiping the entire SSD clean and doing a fresh install.

The other tweaks I had to do were to ensure Steam's interface had GPU accelerated rendering in web views enabled, which helped greatly improve Steam's UX, and update my Xbox controllers' firmware to the latest version.

Once that was done, I was ready to start testing out the various games in my library!

---

## The Part I Was Actually Here For: Gaming

I was quite surprised at how simple things seemed to work from my Steam library, firsthand. I started out by testing games such as Oblivion Remaster and Dispatch (which I had been playing on my Mac via Crossover). Both simply just worked. And any adjustments I made were in the games' graphics settings rather than in Steam itself.

After a couple of playthroughs of Dispatch, I switched over to Final Fantasy VII Remake. After that, I completed another playthrough of Fallout 4, being inspired to pick it up again after watching the second season of the Fallout TV series.

All of the games in my Steam library that I wanted to play simply worked. And moving my PC to our family room, hooking it up to our big screen, and having Steam start in Big Picture mode has made it feel more like a console experience, not really paying attention to the underlying operating system for most of my gaming library.

As for my non-Steam gaming library, I found Heroic worked really well with my GOG games, such as Baldur's Gate 3 and Cyberpunk 2077, though I haven't yet dedicated much time since switching to Linux. I had just recently finished a playthrough of BG3 on my Mac, and plan on actually playing Phantom Liberty at some point in the future. But from the benchmark runs, they seemed to perform without issue.

I wasn't able to get the games in my Epic Games library working however, and I intend to spend more time in the future trying to troubleshoot getting them working at some point.

Now, one disclosure I will make is I'm personally not a huge consumer of a lot of the live service games such as PUBG, Fortnite, or many of the others that might rely on anti-cheat software. This is a well documented issue. My advice for anyone considering switching to Linux is to check your favourite games on [ProtonDB](https://www.protondb.com). It's a great reference from the community about what works with Proton and what doesn't, and some of the troubleshooting steps people have taken to make some games work better.

The other thing I'll call out is VR games. From my research it seems it is possible, but seems to only work with AMD GPUs. So until such time as the Nvidia drivers get updated to better support VR on Linux or I can find a decent deal on a modern Radeon card, my Quest headset will be in storage for the foreseeable future.

---

## Where I'm At Now

Now that my gaming rig is running Nobara full time, I've effectively purged Windows from our house, reclaiming a small piece of control over my own hardware.

As for next steps, next time I have some free time I'll dig into trying to get my Epic Games library working, as well as trying to get my RAID 0 array of four 1TB SATA SSDs mounted and recognized as another disk on my gaming rig.

I can't say the switch to Linux is for everyone. There's something to be said about an experience that just works and for most people, that means either Windows or Mac. But if you're curious, getting fed up with the direction Microsoft seems to be taking with Windows, and willing to spend some time tinkering — it's worth it.

And I truly believe, with efforts from the community and the support from companies like Valve, it's only going to get better in the future.

---

*Have questions about the switch, or want to share your own experience? Feel free to reach out to me on Bluesky, [@acanadiangamer.com](https://bsky.app/profile/acanadiangamer.com)*

---

*This post was written by me with editing and formatting help from Anthropic's Claude AI. All thoughts and opinions are truly my own, and not generated by AI tools.*
