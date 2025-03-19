import pytest
import numpy as np
from src.models.predictor import MiningPredictor

def test_predictor_initialization():
    predictor = MiningPredictor()
    assert predictor is not None
    assert predictor.model is None

def test_model_building():
    predictor = MiningPredictor()
    model = predictor.build_model((10,))
    assert model is not None
    assert len(model.layers) == 3
