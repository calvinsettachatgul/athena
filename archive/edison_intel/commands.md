#### Identify the USB serial device name of your Intel Edison board

ls /dev/cu.usbserial-* 

find the name of the USB serial connection that shows up when your intel Edison board is blugged into your computer

screen /dev/cu.usbserial-XXXXXXXXXX 115200

configure_edison

configure_edison 
	options --setup
		--password
		--wifi


