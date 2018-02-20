<?php require "required/html_opening.php"; ?>
	<script type="text/javascript" src="js/custom/upload_ads.js"></script>
	<form enctype="multipart/form-data" action="database/save_ads.php" method="post" id="save_ads">
		<div class="container" style="margin-top: 10px;">
			<center>
				<div class="adswrap">
					<div class="formwrap">
						<div class="form-group">
						<input type="file" name="img_ads" style="color: white;" id="choosefile">
						</div>
						<div class="form-group">
						<input type="submit" name="submit-img" class="btn btn-primary btn-block" id="submit">
						</div>
						<div class="img-list">
						</div>
					</div>
				</div>
			</center>
		</div>
	</form>
<?php require "required/html_closing.php"; ?>