import azure.functions as func
from triggers import http_trigger_bp, schedule_trigger_bp

app = func.FunctionApp()
app.register_blueprint(http_trigger_bp)
app.register_blueprint(schedule_trigger_bp)
