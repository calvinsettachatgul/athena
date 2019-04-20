# connect to raspberry pi

# https://mycyberuniverse.com/mac-os/connect-to-raspberry-pi-from-a-mac-using-ethernet.html

connecting to raspbery pi via ethernet cable

turn on
internet sharring
ethernet

# List the devices connected via ethernet

>> arp -a

### example output of the above command
```
SFOC02PV1CFG8WM:raspberry_pi t_settc$ arp -a
? (10.41.36.37) at c:8d:db:b2:96:1e on en0 ifscope [ethernet]
? (10.128.128.128) at c:8d:db:b2:96:1e on en0 ifscope [ethernet]
? (10.255.255.255) at ff:ff:ff:ff:ff:ff on en0 ifscope [ethernet]
? (169.254.62.180) at (incomplete) on en0 [ethernet]
? (169.254.255.255) at (incomplete) on en0 [ethernet]
? (192.168.2.2) at (incomplete) on bridge100 ifscope [bridge]
? (192.168.2.3) at b8:27:eb:13:b0:13 on bridge100 ifscope [bridge]
? (192.168.2.255) at ff:ff:ff:ff:ff:ff on bridge100 ifscope [bridge]
? (224.0.0.251) at 1:0:5e:0:0:fb on en0 ifscope permanent [ethernet]
? (239.255.255.250) at 1:0:5e:7f:ff:fa on en0 ifscope permanent [ethernet]
```
raspberry pi is at this address
? (192.168.2.3) at b8:27:eb:13:b0:13 on bridge100 ifscope [bridge]

# ssh into raspberry pi

ssh -L5901:localhost:5901 pi@raspberrypi.local
ssh pi@192.168.2.3

# error with host

```
SFOC02PV1CFG8WM:raspberry_pi t_settc$ ssh -L5901:localhost:5901 pi@raspberrypi.local
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@       WARNING: POSSIBLE DNS SPOOFING DETECTED!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
The ECDSA host key for raspberrypi.local has changed,
and the key for the corresponding IP address fe80::37b5:9775:a20d:697%bridge100
is unknown. This could either mean that
DNS SPOOFING is happening or the IP address for the host
and its host key have changed at the same time.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:IxuekgEn9gHSlq/4xtY+b1x+fRYwlUV8tj6D0dACYPs.
Please contact your system administrator.
Add correct host key in /Users/t_settc/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/<username>/.ssh/known_hosts:32
ECDSA host key for raspberrypi.local has changed and you have requested strict checking.
Host key verification failed.
SFOC02PV1CFG8WM:raspberry_pi t_settc$
```

# remove the known host

# https://www.raspberrypi.org/forums/viewtopic.php?t=40037
ssh-keygen -R raspberrypi.local 

```
SFOC02PV1CFG8WM:raspberry_pi t_settc$ ssh-keygen -R raspberrypi.local
# Host raspberrypi.local found: line 32
/Users/t_settc/.ssh/known_hosts updated.
Original contents retained as /Users/t_settc/.ssh/known_hosts.old
```

```
Original contents retained as /Users/t_settc/.ssh/known_hosts.old
SFOC02PV1CFG8WM:raspberry_pi t_settc$ ssh -L5901:localhost:5901 pi@raspberrypi.local
The authenticity of host 'raspberrypi.local (fe80::37b5:9775:a20d:697%bridge100)' can't be established.
ECDSA key fingerprint is SHA256:############################################
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'raspberrypi.local,fe80::37b5:9775:a20d:697%bridge100' (ECDSA) to the list of known hosts.
pi@raspberrypi.local's password:
Linux raspberrypi 4.9.59-v7+ #1047 SMP Sun Oct 29 12:19:23 GMT 2017 armv7l
```


add raspberry pi to known hosts

verify logging into raspberry pi

type in password

