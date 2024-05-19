<script lang="ts">
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const result = currentYear - 2019;
  const resumeName = `Resume - Miguel Villa Floran - Software Engineer - ${result} YoE`;

  // Change the download attribute programmatically
  const iframe = document.getElementById("pdfFrame");
  if (iframe) {
    iframe.setAttribute("download", `${resumeName}.pdf`);
  }
</script>

<div style="height: 100vh; width: 100ww;">
  <iframe
    id="pdfFrame"
    src="https://kaweees.github.io/resume/resume.pdf"
    width="100%"
    height="100%"
    title={resumeName}
  />
</div>

<style>
  * {
    border: 0;
    margin: 0;
  }
</style>
