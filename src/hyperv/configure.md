# Configure VM

Next we will configure the VM.

Select the VM, and you should see actions on the right. Click `Settings`. Go through the settings below and click `OK` to save them.

## Disable Secure Boot
Under `Security`, uncheck `Enable Secure Boot`

## Dynamic Memory
Under `Memory`, enter the min RAM and max RAM you want to use.

I have 64GB in the host system and I use 8GB min and 32GB max.

## Processors
Under `Processor`, enter the number of processors you want to use.

This should be less than or equal to the number of logical processors your host
computer has.

My machine has 16 cores = 32 logical processors. I put 24 processors for the VM.
You can change this later if you need to.

## Network
Under `Network Adapter`, select the virtual switch you created earlier.

## Checkpoints
I like to disable checkpoints because they use extra disk space and I don't need them.

Under `Checkpoints`, uncheck `Enable Checkpoints`

## Automatic Start Action
Under `Automatic Start Action`, select the one you prefer. I use `None`.

## Automatic Stop Action
Under `Automatic Stop Action`, select the one you prefer. I use `Turn Off the virtual machine`.
