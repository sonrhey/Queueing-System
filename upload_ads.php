<?php require "required/html_opening.php"; ?>
	<script type="text/javascript" src="js/custom/upload_ads.js"></script>
	<form enctype="multipart/form-data" action="database/save_ads.php" method="post" id="save_ads">
		<div class="container" style="margin-top: 10px;">
				<div class="adswrap">
					<div class="formwrap">
						<div class="form-group">
							<div class="input-file-wrap">
							<h2 id="slmf">Select Multiple Files</h2>
							<input type="file" name="choosefile[]" style="color: white;" id="choosefile" accept="image/*" multiple>
							</div>
						</div>
						<div class="form-group">
							<input type="submit" name="submit-img" class="btn btn-primary btn-block" id="submit">
						</div>
					</div>
					<div class="img-list">
					</div>
				</div>
		</div>
	</form>
<?php require "required/html_closing.php"; ?>