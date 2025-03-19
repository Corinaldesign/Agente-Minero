import pandas as pd
import numpy as np
from typing import List, Dict, Any

def process_mining_data(data: List[Dict[str, Any]]) -> pd.DataFrame:
    """Procesa datos mineros crudos y los convierte en un DataFrame"""
    df = pd.DataFrame(data)
    return df

def calculate_metrics(df: pd.DataFrame) -> Dict[str, float]:
    """Calcula métricas importantes de los datos mineros"""
    metrics = {
        'efficiency': df['production'].mean() / df['resources'].mean(),
        'quality': df['quality_score'].mean(),
        'safety_index': df['safety_incidents'].sum() / len(df)
    }
    return metrics
