import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from tensorflow import keras

class MiningPredictor:
    def __init__(self):
        self.model = None

    def build_model(self, input_shape):
        self.model = keras.Sequential([
            keras.layers.Dense(64, activation='relu', input_shape=input_shape),
            keras.layers.Dense(32, activation='relu'),
            keras.layers.Dense(1)
        ])
        self.model.compile(optimizer='adam', loss='mse')
        return self.model
