---
slug: computing-with-qubits
title: Computing With Qubits
author: Rehan Fauzi
author_title: Sr. Core @ SSIT
author_url: https://www.linkedin.com/in/rehan-fauzi-631498207/
author_image_url: /img/author/rehan.jpg
tags: [qubit, quantum, computing]
date: 2021-08-19
---

# _An Introduction To Quantum Computing_

## Introduction

As with any pioneer technology, the media representation ebbs and flows, with periods of positive feedback and phases of harsh critique, often blending science, fiction and hyperbole.
However, we aim to provide a gentle technical introduction to the frontier science of quantum computing. The truth is, quantum computing is still a very new field and tests the limits of both the human mind and hardware technology. However, the theoretical predictions behind the science seem to state that, once extrapolated, the applications are extremely broad.<!--truncate--> We expect to exponentially increase computing power through the use of quantum computing chips, speeding up calculations to levels where thousands of years worth of our silicon supercomputing could be processed in a few days. All of these claims are, at best, decades into the future but we do have the basic building blocks of those quantum systems, unrefined though they may be.

## Existing Technology & Its Shortcomings

In our macro world today, classical computing processes are carried out on silicon based chips that consist of micro size integrated circuits. The components represent storing data, means of processing it and control mechanisms on it. Essentially, the basis of a computer's programming power lies in a chip that contains modules which in turn house logic gates made up of transistors. A transistor is the simplest data processor in a computer and acts as a switch that can either be "on'' or "off", controlling the flow and representation of bit data.

![chip](https://media.istockphoto.com/photos/computer-glowing-futuristic-cpu-processor-concept-picture-id1193095471?k=6&m=1193095471&s=612x612&w=0&h=Hlsqik_fbdcXUAZWt2MUsVh2QrDgN9eJt5LQKvP4Wkg=)

The issue lies with existing scales on which these transistors are built, currently averaging around 15-20 nanometers in size. Since a transistor basically stops or starts the flow of electrons, it is important for the electrons to actually obey the barrier conditions. This property is taken for granted on a macro level but once the scale on which the components are being built starts nearing the sub 10 nanometer scale, quantum phenomena and wave nature take precedence and electrons gain tendency to literally go through the physical bounds of the transistor. Owing to Quantum Tunnelling, electrons from outside can permeate in too and the information being processed becomes useless because there is no more certainty left and error becomes the norm.
Thus, we are nearing the limits of our classical computing power and the solution isn't a "faster" or "more complex" existing computer, the solution is to develop a totally new technology from the ground up.

## Fundamentals Of Qubits

Analogous to classical computing, data in a quantum computer is represented in the form of Quantum Bits or Qubits which is the smallest component of a quantum computer. They can be created from a variety of subatomic particles that need to be small enough to experience quantum entanglement, superposition and exist in a two-state system, like electrons and photons. An electron or photon in itself is not a qubit, instead, when a certain property of the electron like its magnetic spin(polarisation for photons) is taken into consideration alongside the electron itself, it becomes a qubit and the two-state property becomes its value parameter. So, for an electron, a state of - ½ spin can be assigned 0(binary) and +½ spin can be 1(binary) respectively.

Qubits are the fundamental data processors and are responsible for data representation which can be roughly equated as an analogue of our classical binary data representation through transistors. Thus the electron/photon, as a two-state quantum mechanical system, is the smallest component of a quantum computer.
A Quantum Computer reads data through its qubits which represent data in a coherent superposition of 0s and 1s, owing to the laws of quantum mechanics. Superposition of 0s and 1s means that the qubit, at any instant, is a mixture of 0s and 1s. This does not mean that it's some value between 0 and 1 nor does it mean that it is secretly 0 or 1 and we just don't know. It is, infact, quite literally and counter intuitively both 0 and 1 at the same time in a certain percentage (if a qubit that was 80% 1 and 20% 0 was "collapsed" i.e forced to choose a state, it would be "0" approximately 80% of the time and "1" the remaining 20%). The science behind this is still unknown but this ability of qubits to exist as both 0s and 1s at the same time is one of the quantum mechanical phenomena that a quantum computer exploits.

## Foundational Computing Logic

Unlike in a normal logic gate which gets simple input and gives definite output, a quantum chip sets up qubits, applies Quantum Gates, manipulates them and gets output. Due to superposition, the qubits can exist and represent all possible combinations of data at the same time by varying the percentage abundance of 0 and 1 in each qubit and the quantum computer calculates all possible outcomes at once as opposed to the successive calculation done by classical computers.
4 classical bits can store 16 combinations and we can process only one at a time, while 4 qubits in superposition can store and process all 16 at once. The value grows exponentially for n qubits by a factor of 2n and crosses 1 million instantaneous processes in just a 20 qubit system.

However, this phenomenon of Superposition is possible only till the system is not "tested". Once we try to find the actual value that the algorithm has given, the system "collapses", i.e the value stops being both 0 and 1, and instead takes one of the two values. This is because the mere act of measuring cannot be executed without forcing the qubit to "choose" either 0 or 1 and the value which it will choose will depend on its probability (some qubits might be 73% 0 and 27% 1, others maybe in any other combination).

![qubit](https://thumbs.dreamstime.com/b/cyborg-hand-holding-quantum-computing-concept-qubit-icon-d-rendering-view-135550772.jpg)

However, by now the algorithm has already been processed and although the data obtained isn't completely accurate yet (quantum mechanics is a science of probabilities and with probability comes error margins), by repeating the process, we can attain nearly certain outputs of the algorithm while having all possible cases being checked at once. For example, if we take photonic qubits we can then assign a phase on each state after we've taken all possible states from the superposition of the qubits. When waves are in phase, the amplitudes add up and get closer to 1 and when they are out of phase, they go to zero. Doing this over sufficient iterations eventually maximises the probability of the favourable outcome, resulting in the majority of qubits arriving at the same value and you get closer and closer to your answer.

Another property used is that of Quantum Entanglement whereby 2 Qubits can be entangled so that if there is a change in value of one, the value of the other changes too without any sort of communication between them at all. Again, this is cutting edge physics so the causes behind this are not known but what this implies for Quantum Computers is that essentially the input can be derived from the output because, if the qubits are entangled, then each step can be traced back as each step is integrated. It also means that if n qubits are entangled, then the post processing outcomes of all n can be predicted simply by studying the outcome of one, which again makes quantum computing exponentially efficacious.

## Remarks

Though the appeal of this technology lies in its efficiency, the current infrastructure is not practically applicable. Qubit systems are very, very, very delicate and often the system gets irrevocably disturbed by something as vague as a plane taking off from a runway a few kilometres away forcing the entire system to be recalibrated and algorithm to be run again . They are housed in vacuum sealed, diluted refrigerators at near 0K temperatures and are hyper isolated from the external environment. Qubits themselves make residual "noise" which further diminishes their current scope. However, with time progress is being made and it should be kept in mind that the technology and application phase of this theoretical science has just begun. Quantum Computers do not aim to replace classical computers right now, but over time scientists hope that a symbiotic relationship between classical and quantum computing can be made.
