const express = require("express");
const mongoose = require("mongoose");

const machine = require("../models/machine.js");

const getMachines = async (req, res) => {
  const machines = await machine.find();
  res.json(machines);
};

const addMachine = async (req, res) => {
  const { machineType, floor, college, building, isAvailable } = req.body;
  const newMachine = new machine({
    machineType,
    floor,
    college,
    building,
    isAvailable,
  });

  await newMachine.save();
  res.json(newMachine);
};

const updateMachine = async (req, res) => {
  const id = req.params.id;
  const reqMachine = await machine.findById(id);
  reqMachine.isAvailable = !reqMachine.isAvailable;
  await reqMachine.save();
  res.json(reqMachine);
};

module.exports = { getMachines, addMachine, updateMachine };
